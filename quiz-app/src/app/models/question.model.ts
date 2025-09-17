export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  selectedAnswer?: string;
}
