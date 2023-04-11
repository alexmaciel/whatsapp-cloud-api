import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

export const USE_PHONE_ID = new InjectionToken<string>('');
export const USE_TOKEN = new InjectionToken<string>('');

@Injectable({
  providedIn: 'root'
})
export class HttpStatusService {

  private url: string = "https://graph.facebook.com";
  private version: string = "v16.0"

  protected http: HttpClient;
  constructor(
    @Inject(USE_PHONE_ID) private phoneNumberId: string,
    @Inject(USE_TOKEN) private token: string,    
    http: HttpClient,
  ) {
    this.http = http;
  }

  private getToken() {
    let token = this.token;
    return token === null ? null : token;
  } 

  private getPhoneId() {
    let phoneId = this.phoneNumberId;
    return phoneId === null ? null : phoneId;
  } 
  
  private getVersion() {
    let version = this.version;
    return version === null ? null : version;
  }   
  
  private setUrl(url: string) {
    return `${url}/${this.getVersion()}/${this.getPhoneId()}`;
  }

  private createClient() {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.getToken()}`,
      "Accept": "*/*",
    });

    return httpHeaders;
  }    

  post(url: string, data: any): Observable<any> {  
    return this.http.post(this.setUrl(this.url) + url, data, {
      headers: this.createClient() 
    });
  }

  get(url: string, data: any): Observable<any> {  
    return this.http.get(this.setUrl(this.url) + url, data);
  }  
}
