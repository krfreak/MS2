import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home-view',
  templateUrl: './home.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
  ],
})
export class HomeView {
  constructor() {}
}