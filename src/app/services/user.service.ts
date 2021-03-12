import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Observable } from 'rxjs';
import { UserApp } from './user-app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(userfb: firebase.default.User) {
    this.db.object('/users/' + userfb.uid).update({
      name: userfb.displayName,
      email: userfb.email
    });
  }
  
  get(uid: string): Observable<UserApp> {
    let itemRef: AngularFireObject<any>;
    let item: Observable<UserApp>;
    itemRef = this.db.object('/users/' + uid);
    item = itemRef.snapshotChanges().pipe(map(c => ({ id: c.key, ...c.payload.val() })));
    return item;
  }
}