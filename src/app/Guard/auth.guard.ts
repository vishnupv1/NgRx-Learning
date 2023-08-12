import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MasterService } from '../shared/master.service';

export const authGuard: CanActivateFn = (route, state) => {
  const currentMenu = route.url[0].path
  const NavPath = inject(Router)
  const service = inject(MasterService)


  return true
};
