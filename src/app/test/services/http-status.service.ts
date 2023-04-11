import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpStatusService {

  private phoneNumberId: string = "109343525459350";
  private token: string = "EAANzdUzVfZBgBALOE0TZBo706HX9T69zSPmZARnq6cTs5dHvp2QMQdTs9PWRmDfuQLmVBrK8ZAfYENPhuIh4uGaHN8HJZCjIjJfojvrZAW9Piq43ZASn4CxZCmLpUE8ykHTA4II09nnE1Xs32REdEHAGrdlLgkKwV32bH9zIVE2LL1GNcJTxKViKU3GemHHSKJwLvZAFneVl3dAZDZD";
  private url: string = "https://graph.facebook.com";
  private version: string = "v16.0"

  protected http: HttpClient;
  // API URL has to be overrided
  //API_URL = `${environment.apiUrl}`;
  constructor(http: HttpClient) {
    this.http = http;
  }
  
  configure(config: any = {}) {
    config = {
      token: '',
      phoneNumberId: ''
    };
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
    //if (!auth) return url;
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
