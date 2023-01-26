import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeaShopFrontend';

  static badgeNumber: number;

  constructor() {
    AppComponent.badgeNumber = 0;
  }

  get getBadgeNumber()
  {
    return AppComponent.badgeNumber;
  }
}
