import { Component, Input, OnInit } from '@angular/core'
import { Skills } from '../interfaces/skills'
import { ProfileService } from '../services/profile.service'
import { AuthService } from '../services/auth.service'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-profile-skills',
  templateUrl: './profile-skills.component.html',
  styleUrls: ['./profile-skills.component.css'],
})
export class ProfileSkillsComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}
  skills: Skills[] = []
  editable: boolean = false
  loggedIn: boolean = false

  showSkills() {
    this.profileService.getSkills().subscribe({
      next: (skills) => {
        this.skills = skills
      },
    })
  }

  setEditable() {
    this.editable = !this.editable
  }

  editSkills(form: NgForm) {
    let skill: Skills = {
      soft_skills: [
        {
          soft_skill_name: form.value['soft_skill_name_1'],
          soft_skill_score: form.value['soft_skill_score_1'],
        },
        {
          soft_skill_name: form.value['soft_skill_name_2'],
          soft_skill_score: form.value['soft_skill_score_2'],
        },
        {
          soft_skill_name: form.value['soft_skill_name_3'],
          soft_skill_score: form.value['soft_skill_score_3'],
        },
        {
          soft_skill_name: form.value['soft_skill_name_4'],
          soft_skill_score: form.value['soft_skill_score_4'],
        },
      ],
      hard_skills: [
        {
          hard_skill_name: form.value['hard_skill_name_1'],
          hard_skill_score: form.value['hard_skill_score_1'],
        },
        {
          hard_skill_name: form.value['hard_skill_name_2'],
          hard_skill_score: form.value['hard_skill_score_2'],
        },
        {
          hard_skill_name: form.value['hard_skill_name_3'],
          hard_skill_score: form.value['hard_skill_score_3'],
        },
        {
          hard_skill_name: form.value['hard_skill_name_4'],
          hard_skill_score: form.value['hard_skill_score_4'],
        },
      ],
    }
    console.log(skill)

    this.profileService.putSkills(skill).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => {
        this.setEditable()
        this.showSkills()
      },
    })
  }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn()
    this.showSkills()
  }
}
