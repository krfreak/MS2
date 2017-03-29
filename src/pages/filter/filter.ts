import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { MessageService } from '../../providers/message-service/message-service';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
  providers:  [MessageService]
})
export class FilterPage {
  public tags: any[];

  constructor(public navCtrl: NavController, public msgServ: MessageService, public storage: Storage) {
    this.storage.ready().then(()=>{
      this.msgServ.getFilters().then((data)=>{
        this.tags = [];
        for(let tag of data){
          let tmp = {"tag": tag, "checked": true}
          this.tags.push(tmp);
        }
        this.storage.set("filters", this.tags);
      });
    });
  }

  isChecked(tag){
    return this.tags.find(x=>x.tag==tag).checked;
  }

  saveTag(tag){
    this.storage.ready().then(()=>{
      this.storage.get("filters").then((val)=>{
        this.tags = val;
      });
    });
  }

}
