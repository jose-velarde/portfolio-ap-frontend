import { HttpErrorResponse } from '@angular/common/http'
import { Component, HostBinding, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { User } from '../interfaces/user'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = ''
  password: string = ''
  @HostBinding('class') flex = 'flex flex-col grow'

  constructor(private router: Router, private authService: AuthService) {}

  login(form: NgForm) {
    const user: User = { email: this.email, password: this.password }
    this.authService.login(user).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.token)
        localStorage.setItem('isLoggedIn', 'true')
        this.router.navigate(['/']).then(() => {
          window.location.reload()
        })
      },
      error: (err: HttpErrorResponse) => form.reset(),
    })
  }
  ngOnInit(): void {}
}
