import { Routes } from '@angular/router';
import { StartQuiz as StartQuizComponent } from './components/start-quiz/start-quiz';
import { Quiz as QuizComponent } from './components/quiz/quiz';
import { Result as ResultComponent } from './components/result/result';
export const routes: Routes = [
      { path: '', component: StartQuizComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'result', component: ResultComponent}
];
