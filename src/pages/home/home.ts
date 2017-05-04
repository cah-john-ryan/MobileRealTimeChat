import {Component} from "@angular/core";
import {MessageService} from "../../providers/message-service";
import {Message} from "../../models/message";
import {Camera, CameraOptions} from "@ionic-native/camera";

export const imageContentPrefix = 'data:image/jpeg;base64,';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MessageService, Camera]
})
export class HomePage {
  public USER_NAME_CONSTANT = 'John Ryan';
  public currentMessage: string;

  constructor(private messageService: MessageService, private camera: Camera) {
  }

  public send(messageContent: string) {
    this.buildAndSendMessage(messageContent);
  }

  public sendPhoto() {
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 600,
      targetHeight: 400
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = imageContentPrefix + imageData.replace(/[\n\r]/g, '');
      this.buildAndSendMessage(base64Image);
    }, (error) => {
      this.buildAndSendMessage('photo capture error: ' + JSON.stringify(error));
    });
  }

  private buildAndSendMessage(message: string) {
    var newMessage = new Message();
    newMessage.userName = this.USER_NAME_CONSTANT;
    newMessage.messageContent = message;
    this.messageService.addMessage(newMessage);
    this.currentMessage = "";
  }
}
