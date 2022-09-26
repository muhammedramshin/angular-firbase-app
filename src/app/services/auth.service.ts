import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn = new BehaviorSubject<boolean>(false);
  public NotloggedIn = new BehaviorSubject<boolean>(false);

  constructor(private auth:AngularFireAuth, private http: HttpClient,) { }
  

  signIn(email:string,password:string) {

    
    return this.auth.signInWithEmailAndPassword(email,password);
    
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
}