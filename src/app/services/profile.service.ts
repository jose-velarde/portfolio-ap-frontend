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
    return this.http.get<Profile>('https://ap-back.onrender.com/api/profiles/1')
  }
  getEducations() {
    return this.http.get<Education[]>(
      'https://ap-back.onrender.com/api/profiles/1/education'
    )
  }
  getExperiences() {
    return this.http.get<Experience[]>(
      'https://ap-back.onrender.com/api/profiles/1/experience'
    )
  }
  getSkills() {
    return this.http.get<Skills[]>(
      'https://ap-back.onrender.com/api/profiles/1/skills'
    )
  }
  getProjects() {
    return this.http.get<Project[]>(
      'https://ap-back.onrender.com/api/profiles/1/project'
    )
  }

  putProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(
      'https://ap-back.onrender.com/api/profiles/1',
      profile
    )
  }

  putExperience(experience: Experience): Observable<Experience> {
    return this.http.put<Experience>(
      'https://ap-back.onrender.com/api/experience/' + experience.id,
      experience
    )
  }
  putEducation(education: Education): Observable<Education> {
    return this.http.put<Education>(
      'https://ap-back.onrender.com/api/education/' + education.id,
      education
    )
  }
  putProject(project: Project): Observable<Project> {
    return this.http.put<Project>(
      'https://ap-back.onrender.com/api/project/' + project.id,
      project
    )
  }
  postEducation(education: Education) {
    return this.http.post<Education>(
      'https://ap-back.onrender.com/api/profiles/1/education',
      education
    )
  }
  deleteEducation(education: Education) {
    return this.http.delete(
      'https://ap-back.onrender.com/api/education/' + education.id,
      { responseType: 'text' }
    )
  }
  postExperience(experience: Experience) {
    return this.http.post<Experience>(
      'https://ap-back.onrender.com/api/profiles/1/experience',
      experience
    )
  }
  deleteExperience(experience: Experience) {
    return this.http.delete(
      'https://ap-back.onrender.com/api/experience/' + experience.id,
      { responseType: 'text' }
    )
  }
  postProject(project: Project) {
    return this.http.post<Project>(
      'https://ap-back.onrender.com/api/profiles/1/project',
      project
    )
  }
  deleteProject(project: Project) {
    return this.http.delete(
      'https://ap-back.onrender.com/api/project/' + project.id,
      { responseType: 'text' }
    )
  }
  putSkills(skills: Skills): Observable<Skills> {
    return this.http.put<Skills>(
      'https://ap-back.onrender.com/api/profiles/1/skills',
      skills
    )
  }
}
