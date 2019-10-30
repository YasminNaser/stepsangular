import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { User } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // users: Observable<any[]>;
  
  constructor(private db: AngularFireDatabase) { }
  save(user : firebase.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }
  // save(user : firebase.User){
  //   return this.db.doc<User>(`users/${user.uid}`).valueChanges()
    

  // }
}
