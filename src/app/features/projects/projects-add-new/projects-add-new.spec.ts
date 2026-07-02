import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAddNew } from './projects-add-new';

describe('ProjectsAddNew', () => {
  let component: ProjectsAddNew;
  let fixture: ComponentFixture<ProjectsAddNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsAddNew],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsAddNew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
