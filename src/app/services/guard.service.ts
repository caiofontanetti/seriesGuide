import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, RouterStateSnapshot, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
providedIn: 'root'
})
export class GuardService implements CanActivate{
constructor( private authServive: AuthService, private router: Router) { }
canActivate(): Observable<boolean>{
return this.authServive.userApp.pipe(map(appUser => {
if (!appUser) {
console.log('access denied');
this.router.navigate(['/admin/login']);
return false;
}
else{
return true;
}}));
}
}