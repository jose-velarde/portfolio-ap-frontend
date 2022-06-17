import { Component } from '@angular/core'
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
}
