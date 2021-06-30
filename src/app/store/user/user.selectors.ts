import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserName = createSelector(
  selectUserState,
  (state: UserState) => state.userName
);

export const selectAvatar = createSelector(
  selectUserState,
  (state: UserState) => state.avatar
);
export const selectEmail = createSelector(
  selectUserState,
  (state: UserState) => state.email
);

export const selectIsLoggedIn = createSelector(
  selectUserState,
  (state: UserState) => state.isUserLogged
);
