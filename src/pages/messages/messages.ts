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
          this.storage.set("messages", this.messages);
      });
    })
  }

  newMessage(){
    this.navCtrl.push(NewMessagePage);
  }

  doRefresh(refresher){
    this.msgServ.load().then(data => {
      this.storage.ready().then(() => {
        this.storage.set("messages", this.messages);
        this.messages = [];
        this.storage.get("messages").then((data)=>{
          for(let msg of data){
            this.messages.push(msg as Message);
          }
        })
      });
      refresher.complete();
    });
  }

}
