import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { LoginService } from './../../login.service';
import { LoadUser, Login } from './user.action';

@Injectable({ providedIn: 'root' })
export class UserEffects {
  constructor(private actions$: Actions, private loginService: LoginService) {}

  // loginEffect$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(Login),
  //     exhaustMap((action) =>
  //       this.loginService.login(action.user).pipe(
  //         map(({ results }) =>
  //           LoadUser({
  //             name: results[0].name.first,
  //             avatar: results[0].email,
  //             email: results[0].picture.thumbnail,
  //           })
  //         )
  //       )
  //     ),
  //     catchError((err) => EMPTY)
  //   )
  // );
}
