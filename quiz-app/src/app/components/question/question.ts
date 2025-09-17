
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Question as q } from '../../models/question.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-question',
  imports: [CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.css'
})
export class Question {
@Input() question!: q;
  @Output() answerSelected = new EventEmitter<string>();

  selectAnswer(opt: string) {
    this.answerSelected.emit(opt);
  }
}
