import { Component, OnInit } from '@angular/core'
import { ProfileService } from '../services/profile.service'
import { Profile, profile } from '../interfaces/profile'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  profile: Profile = {
    name: '',
    lastname: '',
    ocupation: '',
    address: '',
    email: '',
  }

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
    this.profileService.putProfile(profile).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => {
        this.setEditable()
      },
    })
  }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn()
    this.showProfile()
  }
}
