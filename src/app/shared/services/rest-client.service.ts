import { WeekDay } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, share } from 'rxjs/operators';
import { SnackBarService } from './snack-bar.service';
i

@Injectable({
  providedIn: 'root'
})

export class RestClientService {
  constructor(private http: HttpClient,
    private exceptionService: ExceptionService,
    private snackBarService: SnackBarService) { }

  getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return headers;
  }

  searchForList<T>(url: string): Observable<PaginatedResponseInterface<T>> {
    return this.http.get<PaginatedResponseInterface<T>>(url, { headers: this.getHeaders() }).pipe(share(),
      catchError(e => {
        this.exceptionService.getMensajeError(e)
        return of(e);
      }
      ));
  }

  update<T>(url: string, dto: T): Observable<T> {
    return this.http.put<T>(url, dto, { headers: this.getHeaders() }).pipe(share(),
      catchError(e => {
        this.exceptionService.getMensajeError(e)
        return of(e);
      }
      ));
  }

  create<T>(url: string, dto: T): Observable<T> {
    return this.http.post<T>(url, dto, { headers: this.getHeaders() }).pipe(share(),
      catchError(e => {
        this.exceptionService.getMensajeError(e)
        return of(e);
      }
      ));
  }

  delete<T>(url: string): Observable<any> {
    return this.http.delete<T>(url, { headers: this.getHeaders() }).pipe(share());
  }


}
