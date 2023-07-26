import {Injectable} from '@angular/core';
import {OAuthErrorEvent, OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "../../../config/authCodeflow";
import {JwksValidationHandler} from "angular-oauth2-oidc-jwks";
import {Router} from "@angular/router";
import {BehaviorSubject, combineLatest, filter, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();

  private isDoneLoadingSubject$ = new BehaviorSubject<boolean>(false);
  public isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();


  public canActivateProtectedRoute$: Observable<boolean> = combineLatest([
    this.isAuthenticated$,
    this.isDoneLoading$
  ]).pipe(map(values => values.every(b => b)));


  constructor(private oauth2Service: OAuthService, private router: Router) {
    this.oauth2Service.events.subscribe(event => {
      if (event instanceof OAuthErrorEvent) {
        console.log(event)
      } else {
        console.log(event);
      }
    });

    window.addEventListener('storage', (event) => {
      if (event.key != 'access_token' && event.key !== null) {
        return;
      }
      this.isAuthenticatedSubject$.next(this.oauth2Service.hasValidAccessToken());
      if (!this.oauth2Service.hasValidAccessToken()) {
        this.router.navigate(['/home']);
      }
    });

    this.oauth2Service.events.subscribe(e => {
      this.isAuthenticatedSubject$.next(this.oauth2Service.hasValidAccessToken());
    });


    this.oauth2Service.events
      .pipe(filter(e => ['token_received'].includes(e.type)))
      .subscribe(e => this.oauth2Service.loadUserProfile());

    this.oauth2Service.events
      .pipe(filter(e => ['session_terminated', 'session_error'].includes(e.type)))
      .subscribe(e => this.router.navigate(['/home']));

    this.oauth2Service.setupAutomaticSilentRefresh();

  }


  public configureSSO(): Promise<void> {
    this.oauth2Service.configure(authCodeFlowConfig);
    this.oauth2Service.tokenValidationHandler = new JwksValidationHandler();
    return this.oauth2Service.loadDiscoveryDocument().then(() => {
    }).then(() => {
      this.oauth2Service.tryLogin().then(() => {
        if (this.oauth2Service.hasValidAccessToken()) {
          return Promise.resolve();
        }
        return this.oauth2Service.silentRefresh()
          .then(() => Promise.resolve())
          .catch(result => {
            console.log(result);
            if (result) {
              return Promise.resolve();
            }
            return Promise.reject();
          })
      })
    }).then(() => {
      this.isDoneLoadingSubject$.next(true);

    });
  }

  login() {

    this.oauth2Service.initCodeFlow();
  }

  logout() {
    this.oauth2Service.logOut();
  }

  getIdentity() {
    return this.oauth2Service.getIdentityClaims();
  }

  getAccessToken() {
    return this.oauth2Service.getAccessToken();
  }


  isUserLogged(): boolean {
    let hasIdToken = this.oauth2Service.hasValidIdToken();
    let hasAccessToken = this.oauth2Service.hasValidAccessToken();
    if (hasAccessToken && hasIdToken) {
      return true;
    } else {
      this.oauth2Service.silentRefresh().then(r => console.log(r)).catch(e => console.log(e));
      this.router.navigate(["/"]);
      return false;
    }
  }


}
