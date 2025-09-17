import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {Quiz as  QuizService } from '../../services/quiz';
import {Question as QuestionComponent } from '../question/question';
import { TimeFormatPipe } from '../../pipes/time-format-pipe';
@Component({
  selector: 'app-quiz',
  imports: [CommonModule, AsyncPipe, QuestionComponent,TimeFormatPipe],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz {
 constructor(public quizService: QuizService, private router: Router) {}

  onAnswerSelected(questionId: number, selected: string) {
    this.quizService.submitAnswer(questionId, selected);
  }

  finish() {
    this.router.navigate(['/result']);
  }
}