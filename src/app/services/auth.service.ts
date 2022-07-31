import { HttpClient, HttpHeaders } from '@angular/common/http'
import { EventEmitter, Injectable, Output } from '@angular/core'
import { catchError, Observable, of } from 'rxjs'
import { Token } from '../interfaces/token'
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>()

  private loginUrl = 'https://reqres.in/api/login' // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  login(user: User): Observable<Token> {
    return this.http.post<Token>(this.loginUrl, user, this.httpOptions)
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
    this.fireIsLoggedIn.emit(status)
    return status
  }

  getEmitter() {
    return this.fireIsLoggedIn
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
