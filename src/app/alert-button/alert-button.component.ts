import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss'],
})
export class AlertButtonComponent implements OnInit {

  content = 'tu n\'as pas dit le mot magique ';
  hideContent = true;
  severity = 404;

  constructor() { }

  ngOnInit() {}

  toggle() {
    this.hideContent = !this.hideContent;
  }

  toggleAsync() {
    timer(500).subscribe(() => {
      this.toggle();
    });
  }

}
