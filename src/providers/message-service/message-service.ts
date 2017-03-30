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
     this.http.get('http://78.46.204.166/messages')
       .map(res => res.json())
       .subscribe(data => {
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

  getLectures(){
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.http.get('http://78.46.204.166/lectures')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.lectures;
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
