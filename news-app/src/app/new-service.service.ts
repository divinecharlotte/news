import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

private apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2024-07-29&sortBy=publishedAt&apiKey=4a879e44437b4c34986684492e1314e0';

constructor(private http: HttpClient) { }

getNews(): Observable<any> {
  return this.http.get<any>(this.apiUrl);
}
getNewsById(id: string): Observable<any> {
  return this.http.get<any>(`https://newsapi.org/v2/everything?q=tesla&from=2024-07-29&sortBy=publishedAt&apiKey=4a879e44437b4c34986684492e1314e0/${id}`);
}

}
