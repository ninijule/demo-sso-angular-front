import {CanActivateFn} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../core/service/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isUserLogged();
};
