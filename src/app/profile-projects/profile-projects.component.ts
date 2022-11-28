import { Component, OnInit } from '@angular/core'
import { Project } from '../interfaces/project'
import { ProfileService } from '../services/profile.service'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-profile-projects',
  templateUrl: './profile-projects.component.html',
  styleUrls: ['./profile-projects.component.css'],
})
export class ProfileProjectsComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}
  projects: Project[] = []
  editable: boolean = false
  loggedIn: boolean = false
  showNewProjectForm: boolean = false

  showProjects() {
    this.profileService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects
      },
    })
  }

  setEditable() {
    this.editable = !this.editable
  }

  setNewProjectForm() {
    this.showNewProjectForm = !this.showNewProjectForm
  }

  editProject(project: Project) {
    this.profileService.putProject(project).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => {
        this.setEditable()
      },
    })
  }
  postProject(project: Project) {
    this.profileService.postProject(project).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => {
        this.setNewProjectForm()
        this.showProjects()
      },
    })
  }
  deleteProject(project: Project) {
    this.profileService.deleteProject(project).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => {
        this.showProjects()
      },
    })
  }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn()
    this.showProjects()
  }
}
