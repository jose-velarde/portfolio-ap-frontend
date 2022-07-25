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
  faLock,
  faEye,
  faEyeSlash,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import {
  faGithub,
  faLinkedin,
  faGoogle,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

import { HttpClientModule } from '@angular/common/http'
import { ProfileDetailsComponent } from './profile-details/profile-details.component'
import { ProfileAboutMeComponent } from './profile-about-me/profile-about-me.component'
import { ProfileExperienceEducationComponent } from './profile-experience-education/profile-experience-education.component'
import { ProfileProjectsComponent } from './profile-projects/profile-projects.component'
import { ProfileSkillsComponent } from './profile-skills/profile-skills.component'
import { ProfileNavComponent } from './profile-nav/profile-nav.component'
import { ProgressCircleComponent } from './progress-circle/progress-circle.component'
import { ObserveVisibilityDirective } from './directives/observe-visibility.directive'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { ProfileFooterComponent } from './profile-footer/profile-footer.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthGuard } from './guards/auth.guard'

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
    LoginComponent,
    HomeComponent,
    ProfileFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faGithub,
      faLinkedin,
      faPlus,
      faPencil,
      faTrashCan,
      faLink,
      faGoogle,
      faFacebook,
      faLock,
      faEye,
      faEyeSlash,
      faUser
    )
  }
}
