import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Message } from '../../models/message-model';


@Injectable()
export class MessageService {
  data: any[];

  constructor(public http: Http) {
  }

  reload(){
    return new Promise(resolve => {
     // We're using Angular HTTP provider to request the data,
     // then on the response, it'll map the JSON data to a parsed JS object.
     // Next, we process the data and resolve the promise with the new data.
     this.http.get('http://78.46.204.166/messages')
       .map(res => res.json())
       .subscribe(data => {
         // we've got back the raw data, now generate the core schedule data
         // and save the data for later reference
         this.data = data;
         resolve(this.data);
       });
   });
  }

  send(title, content, tags){
    let message = {"title": title, "content": content, "tags": tags};
    this.http.post("http://78.46.204.166/messages", message).subscribe(data=>{
      this.data = [data];
    }, error =>{
      console.log("fail")
    }
  );
  }

  getFilters(){
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.http.get('http://78.46.204.166/messages/filters')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.tags;
        resolve(this.data);
      });
    });
  }

  load(){
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.http.get('http://78.46.204.166/messages')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.messages;
        resolve(this.data);
      });
    });
  }

}
