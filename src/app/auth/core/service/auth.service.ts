import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { API_URL } from '../constants/api-url';
import { ISingIn } from '../../../types/singIn.interface';
import { LocalStorageKeys } from '../../../types/local-storage-keys';
import { TuiAlertService } from '@taiga-ui/core';
import { IReferralCode } from '../../../types/referral-code.interface';

@Injectable()
export class AuthService {
	public errorMessage: string | undefined;
	public errorStatus: number | undefined;
	constructor(
		private _http: HttpClient,
		@Inject(TuiAlertService) private readonly _alerts: TuiAlertService
	) {}

	public login(loginData: ISingIn): Observable<string> {
		return this._http.post<string>(API_URL + 'auth/signIn', loginData).pipe(
			tap((token: string) => {
				localStorage.setItem(LocalStorageKeys.USER_TOKEN, JSON.stringify(token));
			}),
			catchError((error: HttpErrorResponse) => this.handleError(error))
		);
	}

	private handleError(error: HttpErrorResponse) {
		this.errorStatus = error.status;
		if (error.status === 405) {
			this.errorMessage = 'Метод не существует';
		} else if (error.status === 401) {
			this.errorMessage = 'Ошибка аутентификации. Проверьте email и пароль.';
		} else {
			this.errorMessage = 'Непредвиденная ошибка';
		}
		this.showNotification(error.error as string, error.status);
		return throwError(() => error);
	}

	public showNotification(errorMessage: string, errorStatus: number): void {
		this._alerts.open(errorStatus.toString() + ' ' + errorMessage, { status: 'error' });
	}

	public verifyReferralCode(loginData: IReferralCode): Observable<string> {
		return this._http.post<string>(API_URL + 'auth/verifyReferralCode', loginData).pipe(
			tap((token: string) => {
				localStorage.setItem(LocalStorageKeys.USER_TOKEN, JSON.stringify(token));
			}),
			catchError((error: HttpErrorResponse) => {
				return throwError(() => error);
			})
		);
	}
}
