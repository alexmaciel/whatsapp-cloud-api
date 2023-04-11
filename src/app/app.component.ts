import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { NgWhatsappCloudApiService } from 'ng-whatsapp-cloud-api';
//import { WhatsappCloudApiService } from './test/services/whatsapp-cloud-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whatsapp-cloud-api';

  private subscribe: Subscription[] = []

  constructor(
    private wapi: NgWhatsappCloudApiService
  ) {}

  send() {
    const sb = this.wapi
    .sendMessage("hello world", "5544998717383")
    .subscribe((res) => {
      console.log(res)
    });
    this.subscribe.push(sb);    
  }  
}
