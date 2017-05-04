import {Component} from "@angular/core";
import {MessageService} from "../../providers/message-service";
import {Message} from "../../models/message";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MessageService]
})
export class HomePage {
  public USER_NAME_CONSTANT = 'John Ryan';
  public currentMessage: string;

  constructor(private messageService: MessageService) {
  }

  public send(messageContent: string) {
    this.buildAndSendMessage(messageContent);
  }

  private buildAndSendMessage(message: string) {
    var newMessage = new Message();
    newMessage.userName = this.USER_NAME_CONSTANT;
    newMessage.messageContent = message;
    this.messageService.addMessage(newMessage);
    this.currentMessage = "";
  }
}
