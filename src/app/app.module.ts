import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgWhatsappCloudApiModule } from 'ng-whatsapp-cloud-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgWhatsappCloudApiModule.forRoot({
      phoneNumberId: '109343525459350',
      token: 'EAANzdUzVfZBgBAMZBtztnse1OZATOsEL4u46EOEbm1G3Va97nZBoHTXKLPiWvZAWWZA96ULe4ZAlLNov6vBfv5kEZBUqqbWleIunDjAqqdH5PHZABookvdN0YSFbw29ahpZBV1VBpDS2e7rT6GWnw7UaJmBIQ0ZCRdYCYIxHLlcTszG4k7l56GepYSGQU7WDgRUZAfFY2kYsVR0COwZDZD'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
