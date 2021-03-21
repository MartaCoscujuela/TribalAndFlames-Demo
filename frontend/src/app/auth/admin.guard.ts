import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


// prevents unsigned users to visit pages

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{

    return this.authService.getfakeIsAdmin().then((authenticated: boolean) => {
      console.log(authenticated);
      if (authenticated){
        return true;
      } else {
        return this.router.navigate(['/']);
      }
    });
  }
}
