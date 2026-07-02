import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAddNew } from './tasks-add-new';

describe('TasksAddNew', () => {
  let component: TasksAddNew;
  let fixture: ComponentFixture<TasksAddNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksAddNew],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksAddNew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
