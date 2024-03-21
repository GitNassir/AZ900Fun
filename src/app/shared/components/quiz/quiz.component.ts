import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {quizQuestions} from "../../../Models/quizQuestions.model";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnChanges {
  @Input() questions: quizQuestions[] | null = null;
  currentQuestionIndex: number = 0;
  showResult: boolean = false;
  showFinalResult: boolean = false;
  isCorrect: boolean | null = null;
  hasAnswered: boolean = false;
  selectedOption: string | null = null;
  selectedExplanation: string | null = null;
  correctAnswersCount: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['questions']) {
      this.resetQuiz();
    }
  }

  onSelectOption(option: string, isCorrect: boolean): void {
    if (!this.hasAnswered && this.questions) {
      const question = this.questions[this.currentQuestionIndex];
      question.userAnswer = option;
      question.isUserAnswerCorrect = isCorrect;

      this.selectedExplanation = question.options.find(opt => opt.option === option)?.explanation || null;

      this.selectedOption = option;
      this.isCorrect = isCorrect;
      this.showResult = true;
      this.hasAnswered = true;

      if (isCorrect) {
        this.correctAnswersCount++;
      }
    }
  }


  onNextQuestion(): void {
    if (this.currentQuestionIndex < (this.questions?.length || 0) - 1) {
      this.currentQuestionIndex++;
      this.resetQuestionState();
    } else {
      this.showFinalResult = true;
    }
  }

  private resetQuiz(): void {
    this.currentQuestionIndex = 0;
    this.correctAnswersCount = 0;
    this.showFinalResult = false;
    this.resetQuestionState();
  }

  private resetQuestionState(): void {
    this.selectedOption = null;
    this.showResult = false;
    this.isCorrect = null;
    this.hasAnswered = false;
    this.selectedExplanation = null;
  }
}
