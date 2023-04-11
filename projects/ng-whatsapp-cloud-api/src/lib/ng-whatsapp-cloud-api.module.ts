import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { USE_PHONE_ID, USE_TOKEN, HttpStatusService } from './services/http-status.service';

export interface Config {
  phoneNumberId?: string;
  token?: string;
}

@NgModule({
  imports: [
    HttpClientModule
  ],
})
export class NgWhatsappCloudApiModule {
  /**
   * Use this method in your root module to provide the WhatsappCloudApiService
   */  
  static forRoot(config: Config = {}): ModuleWithProviders<NgWhatsappCloudApiModule> {
    return {
      ngModule: NgWhatsappCloudApiModule,
      providers: [
        {provide: USE_PHONE_ID, useValue: config.phoneNumberId},
        {provide: USE_TOKEN, useValue: config.token},
        HttpStatusService
      ]
    };
  }  
}