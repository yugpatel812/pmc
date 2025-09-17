import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, takeWhile } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class Quiz {
  private _questions: Question[] = [
    { id: 1, text: 'What is 2 + 2?', options: ['2', '4', '6'], correctAnswer: '4' },
    { id: 2, text: 'Capital of France?', options: ['Paris', 'Rome', 'Berlin'], correctAnswer: 'Paris' },
    // Add up to 10 questions here...
  ];

  private _user = { name: '', email: '' };
  private _timeLeft = new BehaviorSubject<number>(15 * 60); // 15 minutes in seconds
  private _timerRunning = false;

  questions$ = new BehaviorSubject<Question[]>(this._questions);
  timeLeft$ = this._timeLeft;

  setUser(name: string, email: string) {
    this._user = { name, email };
  }

  getUser() {
    return this._user;
  }

  startTimer(minutes: number = 15) {
    if (this._timerRunning) return;
    this._timerRunning = true;

    this._timeLeft.next(minutes * 60);
    interval(1000)
      .pipe(takeWhile(() => this._timeLeft.value > 0))
      .subscribe(() => {
        this._timeLeft.next(this._timeLeft.value - 1);
      });
  }

  submitAnswer(questionId: number, selected: string) {
   this._questions = this._questions.map(q =>
    q.id === questionId ? { ...q, selectedAnswer: selected } : q
  );
     this.questions$.next(this._questions);
  }
getResults() {
  return this._questions.map(q => ({
    question: q.text,
    selected: q.selectedAnswer || '-',
    correct: q.correctAnswer,
    isCorrect: q.selectedAnswer === q.correctAnswer
  }));
}
}
