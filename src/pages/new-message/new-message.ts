import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { MessageService } from '../../providers/message-service/message-service';
import { Message } from '../../models/message-model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'page-new-message',
  templateUrl: 'new-message.html',
  providers:  [MessageService]
})
export class NewMessagePage {
  private message = this.formBuilder.group({
    title: new FormControl(), content: new FormControl(), tags: new FormControl()
  });;

  constructor(public viewCtrl: ViewController, public msgServ: MessageService, public formBuilder: FormBuilder) {
  }

  sendMessage(value){
    this.msgServ.send(value.title, value.content, value.tags);
    this.viewCtrl.dismiss();
  }

}
