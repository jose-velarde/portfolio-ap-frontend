import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome'
import {
  faPlus,
  faPencil,
  faTrashCan,
  faLink,
} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { HttpClientModule } from '@angular/common/http'
import { ProfileDetailsComponent } from './profile-details/profile-details.component'
import { ProfileAboutMeComponent } from './profile-about-me/profile-about-me.component'
import { ProfileExperienceEducationComponent } from './profile-experience-education/profile-experience-education.component'
import { ProfileProjectsComponent } from './profile-projects/profile-projects.component'
import { ProfileSkillsComponent } from './profile-skills/profile-skills.component'
import { ProfileNavComponent } from './profile-nav/profile-nav.component'
import { ProgressCircleComponent } from './progress-circle/progress-circle.component'
import { ObserveVisibilityDirective } from './observe-visibility.directive'

@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailsComponent,
    ProfileAboutMeComponent,
    ProfileExperienceEducationComponent,
    ProfileProjectsComponent,
    ProfileSkillsComponent,
    ProfileNavComponent,
    ProgressCircleComponent,
    ObserveVisibilityDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faGithub, faLinkedin, faPlus, faPencil, faTrashCan, faLink)
  }
}
