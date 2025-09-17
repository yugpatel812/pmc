import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Quiz as QuizService } from '../../services/quiz';

@Component({
  selector: 'app-start-quiz',
  imports: [FormsModule],
  templateUrl: './start-quiz.html',
  styleUrl: './start-quiz.css'
})
export class StartQuiz {
  email = '';
  name = '';
  constructor(private quizService: QuizService, private router: Router) {}

  startQuiz() {
    this.quizService.setUser(this.name, this.email);
    this.quizService.startTimer(15);
    this.router.navigate(['/quiz']);
  }
}
