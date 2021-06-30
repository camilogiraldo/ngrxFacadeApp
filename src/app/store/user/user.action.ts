import { createAction, props } from '@ngrx/store';

export const Login = createAction(
  '[USER] Login',
  props<{ user: string }>()
  );

export const LoadUser = createAction(
  '[USER] Login',
  props<{ name: string; email: string; avatar: string }>()
);
