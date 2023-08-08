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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarComponent} from './core/component/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MainComponent} from './core/component/main/main.component';
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ToolbarComponent,
    MainComponent
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        HttpClientModule,
        RouterOutlet,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,

    ],
  providers: [
    provideOAuthClient({
      resourceServer:{
        allowedUrls: ["http://localhost:8080/realms/thales"],
        sendAccessToken: true
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
