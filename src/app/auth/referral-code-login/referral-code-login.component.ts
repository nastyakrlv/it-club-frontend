/* eslint-disable @typescript-eslint/no-floating-promises */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, catchError, delay, finalize, takeUntil, throwError } from 'rxjs';
import { AuthService } from '../core/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { IReferralCode } from '../../types/referral-code.interface';
import { TuiAlertService } from '@taiga-ui/core';
import { Inject } from '@angular/core';

@Component({
	selector: 'app-referral-code-login',
	templateUrl: './referral-code-login.component.html',
	styleUrls: ['./referral-code-login.component.scss'],
})
export class ReferralCodeLoginComponent implements OnDestroy, OnInit {
	public loginIsLoading: boolean;
	public errorMessage: string | undefined;
	public errorStatus: number | undefined;
	private _onDestroy$: ReplaySubject<void>;

	constructor(
		private _authService: AuthService,
		private _router: Router,
		private _route: ActivatedRoute,
		@Inject(TuiAlertService) private readonly _alerts: TuiAlertService
	) {
		this.loginIsLoading = false;
		this._onDestroy$ = new ReplaySubject<void>(1);
	}

	public ngOnDestroy(): void {
		this._onDestroy$.next();
		this._onDestroy$.complete();
	}

	public ngOnInit(): void {
		this._verifyReferralCode();
	}

	private _verifyReferralCode(): void {
		this.loginIsLoading = true;
		const referralCode: string | null = this._route.snapshot.paramMap.get('code');
		this._authService
			.verifyReferralCode({ referralCode } as IReferralCode)
			.pipe(
				finalize(() => {
					this.loginIsLoading = false;
				}),
				catchError((error: HttpErrorResponse) => this.handleError(error)),
				takeUntil(this._onDestroy$)
			)
			.subscribe(() => {
				this._router.navigate(['/', 'workspace']);
			});
	}

	private handleError(error: HttpErrorResponse) {
		this.errorStatus = error.status;
		if (error.status === 405) {
			this.errorMessage = 'Метод не существует';
		} else if (error.status === 406) {
			this.errorMessage = 'Истекший код';
		} else if (error.status === 407) {
			this.errorMessage = 'Недействительный код';
		} else {
			this.errorMessage = 'Непредвиденная ошибка';
		}
		return throwError(() => error);
	}
}
