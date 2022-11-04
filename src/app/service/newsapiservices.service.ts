import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=576f5ba1e9434a00970417091e01ab4b";
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=576f5ba1e9434a00970417091e01ab4b";


  topHeading(): Observable<any>{
    return this._http.get(this.newsApiUrl);
  }
  techNews():Observable<any>{
    return this._http.get(this.techApiUrl)
  }

}
