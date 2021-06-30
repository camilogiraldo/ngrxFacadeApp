import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataStoreModule } from './store/store.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent],
  imports: [BrowserModule, DataStoreModule, HttpClientModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
