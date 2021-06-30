import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { UserState, reducer as UserReducer } from './user/user.reducer';

export interface AppState {
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: UserReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
