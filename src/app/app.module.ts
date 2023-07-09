import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {provideOAuthClient} from 'angular-oauth2-oidc';
import {RouterOutlet} from "@angular/router";
import {HomeComponent} from './core/component/home/home.component';
import {ProfileComponent} from './core/component/profile/profile.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    BrowserAnimationsModule,

  ],
  providers: [
    provideOAuthClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
