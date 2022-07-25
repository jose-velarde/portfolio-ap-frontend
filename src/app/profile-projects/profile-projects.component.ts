import { Component, OnInit } from '@angular/core'
import { Project } from '../interfaces/project'
import { ProfileService } from '../services/profile.service'

@Component({
  selector: 'app-profile-projects',
  templateUrl: './profile-projects.component.html',
  styleUrls: ['./profile-projects.component.css'],
})
export class ProfileProjectsComponent implements OnInit {
  constructor(private profileService: ProfileService) {}
  projects: Project[] = []

  showProjects() {
    this.profileService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects
      },
    })
  }

  ngOnInit(): void {
    this.showProjects()
  }
}
