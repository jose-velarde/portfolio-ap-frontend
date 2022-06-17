import { Component, OnInit } from '@angular/core'
import { ProfileService } from '../profile.service'
import { Profile, profile } from '../interfaces/profile'

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  constructor(private profileService: ProfileService) {}

  profile: Profile | undefined

  showProfile() {
    this.profileService
      .getProfile()
      .subscribe((data: Profile) => (this.profile = { ...data }))
  }

  ngOnInit(): void {
    this.showProfile()
  }
}
