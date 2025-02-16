import { createSelector } from '@ngrx/store';
import { selectRouterState } from '../../../core/core.module';
import { selectExamples, ExamplesState } from '../examples.state';
import { bookAdapter } from './books.reducer';

const { selectEntities, selectAll } = bookAdapter.getSelectors();

export const selectBooks = createSelector(
  selectExamples,
  (state: ExamplesState) => state.books
);

export const selectAllBooks = createSelector(selectBooks, selectAll);
export const selectBooksEntities = createSelector(selectBooks, selectEntities);

// Fix the selectSelectedBook selector
export const selectSelectedBook = createSelector(
  selectBooksEntities,
  selectRouterState,
  (entities, router) => {
    if (!router || !router.state || !router.state.params) {
      return undefined;
    }
    const id = router.state.params['id'];
    return id ? entities[id] : undefined;
  }
);
