import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListPage } from './tasks-list-page';

describe('TasksListPage', () => {
  let component: TasksListPage;
  let fixture: ComponentFixture<TasksListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
