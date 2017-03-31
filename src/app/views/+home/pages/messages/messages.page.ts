import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MessagesService } from '../../../../../modules/messages';

@Component({
  selector: 'messages-page',
  templateUrl: './messages.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
  ],
})
export class MessagesPage {

	public get messages$() {
		return this.messagesService.messages$;
	}

  	constructor( private messagesService: MessagesService ) {}

  	public onRefresh(refresher) {
  		this.messagesService.fetch();
  		refresher.complete();
  		setTimeout(() => refresher.complete(), 500);
  	} 
}