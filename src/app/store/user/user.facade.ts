import { LoginService } from './../../login.service';
import { AppState } from './../index';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as actions from './user.action';
import * as selectors from './user.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  userName: Observable<string> = this.store.pipe(select(selectors.selectUserName));
  avatar: Observable<string> = this.store.pipe(select(selectors.selectAvatar));
  email: Observable<string> = this.store.pipe(select(selectors.selectEmail));
  isUserLogged: Observable<boolean> = this.store.pipe(select(selectors.selectIsLoggedIn));

  constructor(
    private store: Store<AppState>,
    private loginService: LoginService
  ) {}

  login(userName: string): void {
    this.loginService.login(userName).subscribe(({ results }) => {
      const { name: { first: user }, email, picture: { thumbnail: avatar} } = results[0];

      this.store.dispatch(actions.LoadUser({
        name: user,
        avatar,
        email
      }));
    });

    // this.store.dispatch(actions.Login({ user: userName }));
  }
}
