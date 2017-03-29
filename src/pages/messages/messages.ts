import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageService } from '../../providers/message-service/message-service';
import { Message } from '../../models/message-model'
import { Storage } from '@ionic/storage';
import { NewMessagePage } from '../../pages/new-message/new-message';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
  providers:  [MessageService]
})
export class MessagesPage {
  messages: Message[] = [];

  constructor(public navCtrl: NavController, public msgServ: MessageService, public storage: Storage) {
    msgServ.load()
    .then(data => {
      for(let msg of data){
        this.messages.push(new Message(msg.id, msg.title, msg.content, msg.isHint, msg.tags, msg.createdAt));
      };
      this.storage.ready().then(() => {
        for(let msg of this.messages){
          this.storage.set(msg.id, msg);
        }
      });
    })
  }

  newMessage(){
    this.navCtrl.push(NewMessagePage);
  }

  doRefresh(refresher){
    this.msgServ.load().then(data => {
      this.storage.ready().then(() => {
        for(let msg of this.messages){
          this.storage.set(msg.id, msg);
        }
        this.messages = [];
        this.storage.forEach((val, key, i) => {
          this.messages.push(val);
        });
      });
      refresher.complete();
    });
  }

}
