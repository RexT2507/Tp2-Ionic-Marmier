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

  private user: User;

  constructor(private loginService: LoginService) {}

  updateTitle() {
    this.title = 'Nouveau titre';
  }

}
