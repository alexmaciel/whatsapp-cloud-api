import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NgWhatsappCloudApiService } from 'ng-whatsapp-cloud-api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private subscribe: Subscription[] = []

  constructor(
    private wapi: NgWhatsappCloudApiService
  ) {}

  ngOnInit(): void { }

  send() {
    const sb = this.wapi
    .sendMessage("hello world", "554xxxxxxxxxx")
    .subscribe((res) => {
      console.log(res)
    });
    this.subscribe.push(sb);    
  }  

}
