import { Injectable, NgZone, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
var baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})

export class CommonService {


  constructor(private http: HttpClient,
  ) { }

  getMethod(url:string): Observable<any> {
    return this.http.get(baseUrl + url).pipe()
  }

  postMethod(url:string, data:any): Observable<any> {
    return this.http.post(baseUrl + url, data).pipe()
  }
  upload(url:string ,file: any):Observable<any> {
  
  
    const formData = new FormData(); 
      
    formData.append("csvImport", file, file.name);

      
    return this.http.post(baseUrl+ url, formData)
}

  



}
