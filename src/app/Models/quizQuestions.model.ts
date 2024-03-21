export interface quizQuestions {
  question: string;
  options: {
    option: string;
    correct: boolean;
    explanation: string;
  }[];
  userAnswer?: string;
  isUserAnswerCorrect?: boolean;
}
