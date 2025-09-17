import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartQuiz } from './start-quiz';

describe('StartQuiz', () => {
  let component: StartQuiz;
  let fixture: ComponentFixture<StartQuiz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartQuiz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartQuiz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
