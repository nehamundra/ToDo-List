import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router){}
    canActivate(){
        var user=sessionStorage.getItem('username');

        if(user){
            return true;
        }else{
            this.router.navigate(['/login'])
            return false;
        }
    }
}