import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, Observable, of } from 'rxjs'
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private loginUrl = 'https://reqres.in/api/login' // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  login(user: User): Observable<User> {
    return this.http
      .post<User>(this.loginUrl, user, this.httpOptions)
      .pipe(catchError(this.handleError<User>('login')))
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.removeItem('token')
  }
  public isLoggedIn(): boolean {
    let status = false
    if (localStorage.getItem('isLoggedIn') == 'true') {
      status = true
    } else {
      status = false
    }
    return status
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, operation)

      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }
}
