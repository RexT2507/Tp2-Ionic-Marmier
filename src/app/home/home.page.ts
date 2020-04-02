import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import User from '../models/User';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: any;
  user: User = {
    id: '1',
    nom: 'Marmier',
    prenom: 'Baptiste',
    email: 'baptiste.marmier@ynov.com'
  };

  constructor(private loginService: LoginService) {}

  updateTitle() {
    this.title = 'Nouveau titre';
    this.user = this.loginService.login('2', '123');
  }

}
