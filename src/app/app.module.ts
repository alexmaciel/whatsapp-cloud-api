import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgWhatsappCloudApiModule } from 'ng-whatsapp-cloud-api';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgWhatsappCloudApiModule.forRoot({
      phoneNumberId: 'YOUR_PHONE_NUMBER_ID',
      token: 'YOUR_META_WHATSAPP_APP_ACCESS_TOKEN'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
