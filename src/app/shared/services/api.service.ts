import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')
    .set('Accept', 'application/json');

  constructor(private httpClient: HttpClient, private router: Router) {}

  getDataApi(param: string): Observable<any> {
    return this.httpClient
      .get<any>(param, {
        headers: this.headers,
        responseType: 'json',
      })
      .pipe(catchError(this.errorGetHandler.bind(this)));
  }

  errorGetHandler(error: HttpErrorResponse) {
    // this.router.navigate(['/not-found']);
    return throwError(error.message || 'Data Not Found');
  }
}
