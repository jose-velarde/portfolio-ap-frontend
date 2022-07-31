import { Component, OnInit } from '@angular/core'
import { Experience } from '../interfaces/experience'
import { Education } from '../interfaces/education'
import { ProfileService } from '../services/profile.service'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-profile-experience-education',
  templateUrl: './profile-experience-education.component.html',
  styleUrls: ['./profile-experience-education.component.css'],
})
export class ProfileExperienceEducationComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}
  experiences: Experience[] = []
  educations: Education[] = []
  editable: boolean = false
  loggedIn: boolean = false

  showExperiences() {
    this.profileService.getExperiences().subscribe({
      next: (experiences) => {
        this.experiences = experiences
      },
    })
  }
  showEducations() {
    this.profileService.getEducations().subscribe({
      next: (educations) => {
        this.educations = educations
      },
    })
  }

  setEditable() {
    this.editable = !this.editable
  }

  editExperience(experience: Experience) {
    this.profileService.putExperience(experience).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => {
        this.setEditable()
      },
    })
  }

  editEducation(education: Education) {
    this.profileService.putEducation(education).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => {
        this.setEditable()
      },
    })
  }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn()
    this.showExperiences()
    this.showEducations()
  }
}
