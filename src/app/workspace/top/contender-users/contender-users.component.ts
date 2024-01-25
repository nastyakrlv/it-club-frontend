import { Component, OnDestroy } from '@angular/core';
import { WorkspaceService } from '../../workspace.service';
import { Observable, ReplaySubject, catchError, finalize, takeUntil, throwError } from 'rxjs';
import { IContenderData, IContenderUsersResponse } from 'src/app/types/contender-data.interface';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-contender-users',
  templateUrl: './contender-users.component.html',
  styleUrls: ['./contender-users.component.scss']
})
export class ContenderUsersComponent implements OnDestroy {
  public usersIsLoading: boolean;
  public contenderData: IContenderData[] = [];
  public totalPagination: number | undefined;
  public items: string[];
  public limit: number;
  public length!: number;
  public errorMessage: string | undefined;
  private _onDestroy$: ReplaySubject<void>;

  constructor(private _workspaceService: WorkspaceService) {
    this.usersIsLoading = true;
    this._onDestroy$ = new ReplaySubject<void>(1);
    this.limit = 10; //КОЛИЧЕСТВО КАРТ НА СТРАНИЦЕ
    this.length = 1;

    this.items = [
      'По дате изменения',
      'По рейтингу',
      'По убыванию зарплат',
      'По возрастанию зарплат'
    ];

    this._getContenderUsers(0, this.limit);
  }

  public goToPage(index: number): void {
    this._getContenderUsers((index), this.limit);
  }

  public ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  private _getContenderUsers(page: number, limit: number): void {
    this.usersIsLoading = true;
    this._workspaceService.getContenderUsers(page, limit)
      .pipe(
        finalize(() => {
          this.usersIsLoading = false;
        }),
        catchError((error: HttpErrorResponse) => this.handleError(error)),
        takeUntil(this._onDestroy$)
      ).subscribe((response: IContenderUsersResponse) => {
        this.contenderData = response.data;
        this.totalPagination = response.pagination.total;
        this.length = Math.ceil(this.totalPagination / this.limit);
      })
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      this.errorMessage = 'Пожалуйста, авторизуйтесь для просмотра';
    } else {
      this.errorMessage = "Непредвиденная ошибка";
    }
    return throwError(() => error);
  }
}
