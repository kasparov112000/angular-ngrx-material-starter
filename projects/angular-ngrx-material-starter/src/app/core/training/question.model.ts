import { TemplateRef } from '@angular/core';
import { QuestionType } from './types';
import { Track } from './track';
import { GenericQuestion } from '..';
import { Subj } from './subject';
import { EntityState } from '@ngrx/entity';
import { User } from './user';
import { Playlist2 } from './playlist';

export interface Question {
  id?: any;
  type?: QuestionType;
  author?: string;
  track?: Track;
  track2?: Question;
  title?: string;
  description?: string;
  right_answer?: string;
  wrong_answer1?: string;
  wrong_answer2?: string;
  wrong_answer3?: string;
  wrong_answer4?: string;

  answers?: string[];
  answer?: any;
  correctAnswer?: any;
  answered?: boolean;
  wasCorrect?: boolean;
  component?: GenericQuestion;
  statusTemplate?: TemplateRef<any>;
  subject?: Subj[];
  name?: string;
  __typename?: string;
}

export type QuestionFilter = 'ALL' | 'DONE' | 'ACTIVE';

export interface QuestionState extends EntityState<Question> {
  // books?: Question[];
  // quests: Question[];
}

// ;
// filter: QuestionFilter;
