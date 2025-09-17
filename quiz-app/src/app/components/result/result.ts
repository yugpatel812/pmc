import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {Quiz as  QuizService } from '../../services/quiz';
@Component({
  selector: 'app-result',
  imports: [CommonModule],
  templateUrl: './result.html',
  styleUrl: './result.css'
})
export class Result {
results : any;

  constructor(private quizService: QuizService) {
    this.results= this.quizService.getResults();
  }
}
