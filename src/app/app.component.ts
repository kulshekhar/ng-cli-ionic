import { Component } from '@angular/core';
import { ObservableMedia } from "@angular/flex-layout";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private router: Router, public media: ObservableMedia) {

  }
}
