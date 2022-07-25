import { Component, HostBinding, OnInit } from '@angular/core'
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

  constructor(public authService: AuthService) {}

  login() {
    const user: User = { email: this.email, password: this.password }
    this.authService.login(user).subscribe((data) => {
      console.log(data)
    })
  }

  ngOnInit(): void {}
}
