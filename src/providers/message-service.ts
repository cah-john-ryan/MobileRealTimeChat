import { Injectable } from '@angular/core';
import { Message } from '../models/message'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MessageService {
  public messages: FirebaseListObservable<Message[]>

  constructor(public angularFireDatabase: AngularFireDatabase) {
    this.messages = angularFireDatabase.list('/messages');
  }

  public addMessage(message: Message) {
    message.messageDate = new Date().toString();
    this.messages.push(message);
  }
}
