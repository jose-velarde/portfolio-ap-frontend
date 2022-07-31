import { Component, OnInit } from '@angular/core'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.css'],
})
export class ProfileNavComponent implements OnInit {
  constructor(private authService: AuthService) {}
  loggedIn: boolean = false

  logout() {
    this.authService.logout()
    window.location.reload()
  }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn()
  }
}
