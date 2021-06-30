import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './user.action';

export interface UserState {
  isUserLogged: boolean;
  userName: string;
  avatar: string;
  email: string;
}

const initialState: UserState = {
  isUserLogged: false,
  userName: '',
  avatar: '',
  email: '',
};

const userReducer = createReducer(
  initialState,
  on(actions.LoadUser, (state, { name, email, avatar }) => ({
    ...state,
    isUserLogged: true,
    userName: name,
    email,
    avatar,
  }))
);

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
