import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})

export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message(1, 'First', 'I have the high ground.', 'General Kenobi'),
    new Message(2, 'Second', 'Did you ever hear the tragedy of Darth Plagueis the Wise?', 'Palpatine'),
    new Message(3, 'Third', 'What if the democracy we thought we were serving no longer exists?”', 'Padme'),
    new Message(4, 'Fourth', 'Rebellions are built on hope.', 'Andor')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}
