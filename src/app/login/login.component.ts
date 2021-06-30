import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as userActions from '../store/user/user.action';
import { LoginService } from './../login.service';
import { AppState } from './../store/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName = '';

  constructor(
    private loginService: LoginService,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.loginService.login(this.userName).subscribe(({ results }) => {
      const { name: { first: user }, email, picture: { thumbnail: avatar}} = results[0];

      this.store.dispatch(userActions.LoadUser({
        name: user,
        avatar,
        email
      }));
    });
  }
}
