import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { IReferralCode } from '../types/referral-code.interface';
import { LocalStorageKeys } from '../types/local-storage-keys'


@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private _http: HttpClient) {
	}

	public verifyReferralCode(loginData: IReferralCode): Observable<string> {
		return this._http.post<string>('http://outsourcing.nat.tepkom.ru:13200/api/auth/verifyReferralCode', loginData).pipe(
			tap((token: string) => {
				localStorage.setItem(LocalStorageKeys.USER_TOKEN, JSON.stringify(token));
			}),
			catchError((error: any) => {
				return throwError(() => error);
			})
		);
	}
}
