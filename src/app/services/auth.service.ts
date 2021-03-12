import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Observable, of } from 'rxjs';
import { UserApp } from './user-app';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
providedIn: 'root'
})
export class AuthService {
// user$: Observable<firebase.User>;
userApp: Observable<UserApp>;
constructor(private afAuth: AngularFireAuth, private appUser: UserService, private router: Router) {
this.userApp = afAuth.authState.pipe(
switchMap(user => {
if (user) {
return this.appUser.get(user.uid);
}else{
return of(null);
}
})
);
}
async login(){
const provider = new firebase.default.auth.GoogleAuthProvider();
const credential = await this.afAuth.signInWithPopup(provider);
this.appUser.save(credential.user);
this.router.navigate(['/']);
}
logout(){
this.afAuth.signOut();
this.router.navigate(['/']);
}
}