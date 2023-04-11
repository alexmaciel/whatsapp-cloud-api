# NgWhatsappCloudApi

Unofficial Angular wrapper for the [WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api)


## Features supported

1. Sending messages
2. Sending  Media (images, audio, video and ducuments)
3. Sending location
4. Sending template messages


## Installation

First you need to install the npm module:

```sh
npm install ng-whatsapp-cloud-api --save
```


## Setting up

To get started using this package, you will need **TOKEN** and **TEST WHATSAPP NUMBER** (the library works either with a production phone number, if you have one) which you can get from the [Facebook Developer Portal](https://developers.facebook.com/)

Here are steps to follow for you to get started:

1. [Go to your apps](https://developers.facebook.com/apps)
2. [create an app](https://developers.facebook.com/apps/create/)
3. Select Business >> Business
4. It will prompt you to enter basic app informations
5. It will ask you to add products to your app
    a. Add WhatsApp Messenger
6. Right there you will see a your **TOKEN** and **TEST WHATSAPP NUMBER** and its phone_number_id
7. Lastly verify the number you will be using for testing on the **To** field.


## Authentication

To authenticate your application, you need to specify  the ```YOUR_META_WHATSAPP_APP_ACCESS_TOKEN``` and the ```YOUR_PHONE_NUMBER_ID``` of your application.


## Usage

#### 1. Import the `NgWhatsappCloudApiModule`:

Finally, you can use ngx-translate in your Angular project. You have to import `NgWhatsappCloudApiModule.forRoot()` in the root NgModule of your application.

The [`forRoot`](https://angular.io/api/router/RouterModule#forroot) static method is a convention that provides and configures services at the same time.
Make sure you only call this method in the root module of your application, most of the time called `AppModule`.
This method allows you to configure the `NgWhatsappCloudApiModule` by specifying a loader, a parser and/or a missing translations handler.

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgWhatsappCloudApiModule} from 'ng-whatsapp-cloud-api';

@NgModule({
    imports: [
        BrowserModule,
        NgWhatsappCloudApiModule.forRoot({
            phoneNumberId: 'YOUR_PHONE_NUMBER_ID',
            token: 'YOUR_META_WHATSAPP_APP_ACCESS_TOKEN'          
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 2. Init the `NgWhatsappCloudApiService` for your application:

```ts
import {Component} from '@angular/core';
import {NgWhatsappCloudApiService} from 'ng-whatsapp-cloud-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'whatsapp-cloud-api';

    constructor(private wapi: NgWhatsappCloudApiService) {}
    
    send() {
        this.wapi.sendMessage("hello world", "554xxxxxxxxxx");
    }      
}
```


## Contributing

Contribute to make more improvement and fix bugs.


## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.