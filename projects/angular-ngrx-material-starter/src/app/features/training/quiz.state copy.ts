import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { questionReducer } from './quiz-crud/questions.reducer';
// import { Book, BookState } from './quiz-crud/books.model';
import { QuestionState } from './questions/contracts/question';
import { SubjectState } from './questions/contracts/subject';
import { subjectAdapter, subjectReducer } from './subject-crud/subject.reducer';
import { AppState } from '../../core/core.state';

export const FEATURE_NAME = 'quiz';
export const selectQuiz = createFeatureSelector<State, QuizState>(FEATURE_NAME);
export const reducers: ActionReducerMap<QuizState> = {
  // todos: todosReducer,
  // stocks: stockMarketReducer,
  subjects: subjectReducer,
  questions: questionReducer
  //  form: formReducer
};

export interface QuizState {
  // todos: TodosState;
  // stocks: StockMarketState;
  // form: FormState;
  subjects: SubjectState;
  questions: QuestionState;
}

export interface State extends AppState {
  quiz: QuizState;
}
