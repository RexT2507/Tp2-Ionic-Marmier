import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';

import IUser from '../models/IUser';
import User from '../models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // @Input() prenom: any = '';
  // @Input() mdp: any = '';

  id = '';
  mdp = '';

  user: User;
  loading = false;
  error: string;

  constructor( private loginService: LoginService ) { }

  ngOnInit() {

  }


  login() {
    this.loading = true;
    this.error = null;

    this.loginService.login(this.id, this.mdp)
      .subscribe(users => this.user = users,
        error => {
            this.error = error;
            this.loading = false;
        }, () => {
            this.loading = false;
        });
  }

}
