import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../store/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isUserLogged = false;
  user = '';
  avatar = '';
  email = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe(({ user }) => {
      const { userName, avatar, email, isUserLogged } = user;
      this.user = userName;
      this.avatar = avatar;
      this.email = email;
      this.isUserLogged = isUserLogged;
    });
  }
}
