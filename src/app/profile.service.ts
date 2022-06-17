import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Experience } from './interfaces/experience'
import { Education } from './interfaces/education'
import { Profile } from './interfaces/profile'
import { Skills } from './interfaces/skills'

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
}
