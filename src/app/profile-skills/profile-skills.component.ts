import { Component, OnInit } from '@angular/core'
import { Skills } from '../interfaces/skills'
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-profile-skills',
  templateUrl: './profile-skills.component.html',
  styleUrls: ['./profile-skills.component.css'],
})
export class ProfileSkillsComponent implements OnInit {
  constructor(private profileService: ProfileService) {}
  skills: Skills[] = []

  showSkills() {
    this.profileService.getSkills().subscribe({
      next: (skills) => {
        this.skills = skills
      },
    })
  }

  ngOnInit(): void {
    this.showSkills()
  }
}
