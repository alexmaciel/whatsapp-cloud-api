import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpStatusService } from './http-status.service';
import { MessageData, TemplateData } from '../models/whatsappcloudapi.model';

@Injectable({
  providedIn: 'root'
})
export class WhatsappCloudApiService {

  constructor(
    private http: HttpStatusService
  ) { }

  /**
   * @param string message
   * @param string recipientId
   * @param string recipientType
   * @param boolean previewUrl
   * @return mixed
   */
  sendMessage(message: string, recipientId: string, recipientType: string = "individual", previewUrl: boolean = true): Observable<any> {
    const data: MessageData = {
      "messaging_product": "whatsapp",
      "recipient_type": recipientType,
      "to": recipientId,
      "type": "text",
      "text": {"preview_url": previewUrl, "body": message},
    };    
    return this.http.post('/messages', data);
  }

  /**
   * @param string lat
   * @param string long
   * @param string name
   * @param string address
   * @param string recipientId
   * @return mixed
   */  
  sendLocation(lat: string, long: string, name: string, address: string, recipientId: string): Observable<any> {
    const data: MessageData = {
      messaging_product: "whatsapp",
      to: recipientId,
      type: "location",
      location: {
          latitude: lat,
          longitude: long,
          name: name,
          address: address,
      }
    };    
    return this.http.post('/messages', data);
  }  

  /**
   * @param image
   * @param recipientId
   * @param string recipientType
   * @param caption
   * @param link
   * @return mixed
   */  
  sendImage(image: any, recipientId: string, recipientType: string = "individual", caption: any = null, link: boolean = true): Observable<any> {
    const data: MessageData = {
      messaging_product: "whatsapp",
      recipient_type: recipientType,
      to: recipientId,
      type: "image",
      image: {
        link: image,
      },
    };     
    return this.http.post('/messages', data);
  }    

  //create button

  /**
   * @param button
   * @return array
   */
  createButton(button: any) {
    return {
      type: "list",
      header: {type: "text", text: button.get("header")},
      body: {text: button.get("body")},
      footer: {text: button.get("footer")},
      action: button.get("action"),
    };
  }  

  /**
   * @param button
   * @param recipientId
   * @return mixed
   */
  sendButton(button: any, recipientId: string){
    const data: any = {
        messaging_product: "whatsapp",
        to: recipientId,
        type: "interactive",
        interactive: this.createButton(button),
    };
    return this.http.post('/messages', data);
  }  

  /**
   * @param string $template
   * @param string $recipientId
   * @param string $lang
   * @return mixed
   */  
  send_template(template: string, recipientId: string, lang: string = "en_US"): Observable<any> {
    /*
      * Sends a template message to a WhatsApp user, Template messages can either be;
      * 1. Text template
      * 2. Media based template
      * 3. Interactive template
      * You can customize the template message by passing a dictionary of components.
      * You can find the available components in the documentation.
      * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates
      *
      * @param string $template: Template name to be sent to the user
      * @param string $recipient_id: Phone number of the user with country code wihout +
      * @param string $lang: Language of the template message
      * @param array $components: List of components to be sent to the user
      *
      * @return json
      */

    const data: TemplateData = {
        messaging_product: "whatsapp",
        type: "template",
        to: recipientId,
        template: {name: template, language: {code: lang}},
    };
    return this.http.post('/messages', data);
  }  
}
