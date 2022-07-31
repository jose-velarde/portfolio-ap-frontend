import { Component, OnInit } from '@angular/core'
import { Profile } from '../interfaces/profile'
import { AuthService } from '../services/auth.service'
import { ProfileService } from '../services/profile.service'

@Component({
  selector: 'app-profile-about-me',
  templateUrl: './profile-about-me.component.html',
  styleUrls: ['./profile-about-me.component.css'],
})
export class ProfileAboutMeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  profile: Profile = { about: '' }
  editable: boolean = false
  loggedIn: boolean = false

  showProfile() {
    this.profileService
      .getProfile()
      .subscribe((data: Profile) => (this.profile = { ...data }))
  }

  setEditable() {
    this.editable = !this.editable
  }

  edit(profile: Profile) {
    console.log(this.profileService.putProfile(profile).subscribe())
  }
  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn()
    this.showProfile()
  }
}
