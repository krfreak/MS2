import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../';

@Component({
  selector: 'menu-page',
  templateUrl: './menu.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
  ],
})
export class MenuPage {
	constructor(public navigationController: NavController) {
	}

	public goToPage(page, url?: string) {
		switch(page){ 
			case 'links':
				// this.navigationController.push(LinksPage);
				break;
			case 'settings':
				// this.navigationController.push(SettingsPage);
				break;
			case 'filter':
				// this.navigationController.push(FilterPage);
				break;
			case 'about':
				this.navigationController.push(AboutPage);
				break;
			case 'moodle':
    			window.open(encodeURI(url), '_system');
				break;
		}
	}
}