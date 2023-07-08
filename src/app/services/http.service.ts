import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url: string = 'http://localhost:5000/api/books/getbooks';

  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<any> {
    // const params = new HttpParams({ fromString: 'name=term' });
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', 'Bearer 123');
    // const h = headers.keys();
    // console.log(h);
    // return this.httpClient.get(this.url, { headers, params });

    return this.httpClient.get(this.url);
  }
}
