import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProfileExperienceEducationComponent } from './profile-experience-education.component'

describe('ProfileExperienceEducationComponent', () => {
  let component: ProfileExperienceEducationComponent
  let fixture: ComponentFixture<ProfileExperienceEducationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileExperienceEducationComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileExperienceEducationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
