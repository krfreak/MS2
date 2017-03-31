import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MessagesPage, MenuPage, SchedulePage } from './pages';

@Component({
  selector: 'home-view',
  templateUrl: './home.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
  ],
})
export class HomeView {

	public get tabs() {
		return [
			{ title: 'Stundenplan', icon: 'calendar', page: SchedulePage },
			{ title: 'Nachrichten', icon: 'chatbubbles', page: MessagesPage },
			{ title: 'Fortschritt', icon: 'trending-up', page: MessagesPage },
			{ title: 'Hauptmenü', icon: 'home', page: MenuPage },
		];
	}

  	constructor() {
  	}
}