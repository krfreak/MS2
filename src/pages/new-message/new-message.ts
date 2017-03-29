import { Component } from '@angular/core';
import { ToastController, ViewController } from 'ionic-angular';
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

  constructor(public viewCtrl: ViewController, private toastCtrl: ToastController, public msgServ: MessageService, public formBuilder: FormBuilder) {
  }

  sendMessage(value){
    this.presentToast();
    this.msgServ.send(value.title, value.content, value.tags);
    this.viewCtrl.dismiss();
  }

  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Nachricht wurde versendet',
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

}
