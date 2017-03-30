import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'about-view',
  templateUrl: './about.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
  ],
})
export class AboutView {
  constructor() {}
}