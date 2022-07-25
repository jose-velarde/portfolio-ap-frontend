import { Component, OnInit } from '@angular/core'
import { Experience } from '../interfaces/experience'
import { Education } from '../interfaces/education'
import { ProfileService } from '../services/profile.service'

@Component({
  selector: 'app-profile-experience-education',
  templateUrl: './profile-experience-education.component.html',
  styleUrls: ['./profile-experience-education.component.css'],
})
export class ProfileExperienceEducationComponent implements OnInit {
  constructor(private profileService: ProfileService) {}
  experiences: Experience[] = []
  educations: Education[] = []

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

  ngOnInit(): void {
    this.showExperiences()
    this.showEducations()
  }
}
