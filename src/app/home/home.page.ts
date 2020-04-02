import { Component } from '@angular/core';
import User from '../models/User';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;

  private user: User;

  constructor() {}

  updateTitle() {
    this.title = 'Nouveau titre';
  }

}
