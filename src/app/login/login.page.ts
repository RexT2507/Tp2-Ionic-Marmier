import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
import User from '../models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //  loginUserData: any = {};

  @Input() prenom: any;
  @Input() mdp: any;

  private user: User;

  // loginForm: FormGroup;

  constructor( private loginService: LoginService) { }

  ngOnInit() {
    // this.loginForm = this.formBuilder.group({

    // });
  }

  loginUser() {
    this.user = this.loginService.login(this.prenom, this.mdp);
    console.log(this.user);
  }
}
