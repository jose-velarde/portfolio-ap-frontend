import { Component } from '@angular/core'
import { Experience } from './experience'
import { faPlus, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Argentina Programa - Fullstack Project'
  faGithub = faGithub
  faLinkedin = faLinkedin
  faPlus = faPlus
  faPencil = faPencil
  faTrashCan = faTrashCan
  mockJob: Experience = {
    id: 1,
    category: 'Experience',
    name: 'Mock job',
    company: 'Mock company',
    date: new Date(2022, 1, 1),
    location: 'Mock city, Mock coutry',
    description: 'Mock job were I excelled',
    achievements: [
      'Mock achievement 1',
      'Mock achievement 2',
      'Mock achievement 3',
    ],
  }
}
