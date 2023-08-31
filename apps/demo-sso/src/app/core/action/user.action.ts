import {createAction, props} from '@ngrx/store';

export const setLoggedUser = createAction(
  '[]',
  props<{ isloggedUser: boolean }>
);
