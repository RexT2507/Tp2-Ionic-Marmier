import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import User from '../models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @Input() prenom: any = '';
  @Input() mdp: any = '';

  private user: User;

  constructor( private loginService: LoginService) { }

  ngOnInit() {

  }

  loginUser() {
    this.user = this.loginService.login(this.prenom, this.mdp);
    console.log(this.user);
  }
}
