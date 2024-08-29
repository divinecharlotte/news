import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class NewServiceService {


constructor(private http: HttpClient) { }

getNews(): Observable<any> {
  return this.http.get<any>(environment.apiUrl);
}
getNewsById(id: string): Observable<any> {
  return this.http.get<any>(`environment.apiUrl/${id}`);
}

}
