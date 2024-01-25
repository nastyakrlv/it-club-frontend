import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { LocalStorageKeys } from "../types/local-storage-keys";
import { IContenderUsersResponse } from "../types/contender-data.interface";
import { API_URL } from "../types/api-url";
import { ICompaniesResponse } from "../types/companies-data.interface";

@Injectable()
export class WorkspaceService {

	private _headers: HttpHeaders;
	private _api_key: string;

	constructor(private _http: HttpClient) {

		const storedToken: string | null = localStorage.getItem(LocalStorageKeys.USER_TOKEN);

		if (storedToken) {
			this._api_key = JSON.parse(storedToken).accessToken;
		} else {
			this._api_key = '';
		}

		this._headers = new HttpHeaders({
			"Authorization": `Bearer ${this._api_key}`
		});
	}

	public getContenderUsers(page: number, limit: number): Observable<IContenderUsersResponse> {
		return this._http.get<IContenderUsersResponse>(API_URL + `users/getContenderUsers${page}${limit}`, { headers: this._headers }).pipe(
			catchError((error: HttpErrorResponse) => {
				return throwError(() => error);
			})
		);
	}

	public getCompanies(page: number, limit: number): Observable<ICompaniesResponse> {
		return this._http.post<ICompaniesResponse>(API_URL + `company/getCompanies${page}${limit}`, {}, { headers: this._headers }).pipe(
			catchError((error: HttpErrorResponse) => {
				return throwError(() => error);
			})
		);
	}

}
