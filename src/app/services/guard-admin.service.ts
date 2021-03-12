import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
providedIn: 'root'
})
export class GuardAdminService {
constructor( private authServive: AuthService, private router: Router) { }

canActivate(): Observable< boolean>{
return this.authServive.userApp.pipe(map(appUser => {
if (appUser.isAdmin !== true ) {
console.log('admin access denied');
this.router.navigate(['/auth/denied']);
return false;
}
else{
return true;
}}));
}
}