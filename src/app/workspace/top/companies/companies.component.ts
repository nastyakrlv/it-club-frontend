import { Component, OnDestroy } from '@angular/core';
import { Observable, ReplaySubject, catchError, finalize, takeUntil, throwError } from 'rxjs';
import { WorkspaceService } from '../../workspace.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ICompaniesData, ICompaniesResponse } from 'src/app/types/companies-data.interface';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnDestroy {
  public companiesIsLoading: boolean;
  public companiesData: ICompaniesData[] = [];
  public totalPagination: number | undefined;
  public items: string[];
  public limit: number;
  public length!: number;
  public errorMessage: string | undefined;
  private _onDestroy$: ReplaySubject<void>;

  constructor(private _workspaceService: WorkspaceService) {
    this.totalPagination = 1;
    this.companiesIsLoading = true;
    this._onDestroy$ = new ReplaySubject<void>(1);
    this.limit = 10; //КОЛИЧЕСТВО КАРТ НА СТРАНИЦЕ
    this.length = 1; 

    this.items = [
      'По дате изменения',
      'По рейтингу',
      'По соответствию',
      'По удалённости'
    ];

    this._getCompanies(0, this.limit);
  }

  public goToPage(index: number): void {
    this._getCompanies((index), this.limit);
  }

  public ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  private _getCompanies(page: number, limit: number): void {
    this.companiesIsLoading = true;
    this._workspaceService.getCompanies(page, limit)
      .pipe(
        finalize(() => {
          this.companiesIsLoading = false;
        }),
        catchError((error: HttpErrorResponse) => this.handleError(error)),
        takeUntil(this._onDestroy$)
      ).subscribe((response: ICompaniesResponse) => {
        this.companiesData = response.data;
        this.totalPagination = response.pagination.total;
        this.length = Math.ceil(this.totalPagination/this.limit);
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
