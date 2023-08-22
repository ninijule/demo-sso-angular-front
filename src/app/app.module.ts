import {isDevMode, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {provideOAuthClient} from 'angular-oauth2-oidc';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarComponent} from './core/component/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./core/reducer/counter.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
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
      StoreModule.forRoot( {
        count: counterReducer
      }),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: !isDevMode(), // Restrict extension to log-only mode
        autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
        traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      })

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
