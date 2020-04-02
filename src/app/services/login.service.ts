import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IUser from '../models/IUser';
import User from '../models/User';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(id: string, mdp: string): Observable<User> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users?username=' + id)
      .pipe(
        map(
          value => {
            if (value.length > 0) {
              return value[0];
            } else {
              throw new Error ('Aucun utilisateur trouvé');
            }
          }
        ),
        tap(val => console.log(val)),
        map(value => new User(value.id, value.name, value.email))
      );
}
}
