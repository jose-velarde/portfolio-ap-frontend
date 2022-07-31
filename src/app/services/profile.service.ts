import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Experience } from '../interfaces/experience'
import { Education } from '../interfaces/education'
import { Profile } from '../interfaces/profile'
import { Skills } from '../interfaces/skills'
import { Project } from '../interfaces/project'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<Profile>(
      'https://jvelarde-ap-backend.herokuapp.com/api/profiles/1'
    )
  }
  getEducations() {
    return this.http.get<Education[]>(
      'https://jvelarde-ap-backend.herokuapp.com/api/profiles/1/education'
    )
  }
  getExperiences() {
    return this.http.get<Experience[]>(
      'https://jvelarde-ap-backend.herokuapp.com/api/profiles/1/experience'
    )
  }
  getSkills() {
    return this.http.get<Skills[]>(
      'https://jvelarde-ap-backend.herokuapp.com/api/profiles/1/skills'
    )
  }
  getProjects() {
    return this.http.get<Project[]>(
      'https://jvelarde-ap-backend.herokuapp.com/api/profiles/1/project'
    )
  }

  putProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(
      'https://jvelarde-ap-backend.herokuapp.com/api/profiles/1',
      profile
    )
  }
}
