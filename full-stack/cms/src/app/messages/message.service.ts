import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './message.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageChangedEvent = new EventEmitter<Message[]>();
  maxMessageId: number;
  private messages: Message[] = [];

  constructor(private http: HttpClient) {
    // this.messages = MOCKMESSAGES;
  }

  getMessages(): Message[] {
    this.http.get('https://toast-8e0b2-default-rtdb.firebaseio.com/messages.json').subscribe(
      (messages: Message[]) => {
        this.messages = messages;
        this.maxMessageId = this.getMaxId();
        this.messages.sort();
        this.messageChangedEvent.next(this.messages.slice());
      },
      (error: any) => {
        console.log(error.message);
      }
    )
    return this.messages.slice();
  }

  storeMessages() {
    const json = JSON.stringify(this.messages);
    this.http.put('https://toast-8e0b2-default-rtdb.firebaseio.com/messages.json', json,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    ).subscribe(() => {
      this.messageChangedEvent.next(this.messages.slice());
    })
  }

  getMessage(id: string): Message {
    for (let message of this.messages) {
      if (message.id === id) {
        return message;
      }
    }
    return null;
  }

  getMaxId(): number {
    let maxId: number = 0;

    for (let message of this.messages) {
      let currentId = +message.id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.storeMessages();
  }
}

