import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_KEY } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class TheMovieDbService {
  constructor(
    private http: HttpClient,
    @Inject(API_BASE_URL)
    private baseUrl: string,
    @Inject(API_KEY)
    private apiKey: string
  ) {}

  public get<T>(url: string, options: { [key: string]: string } = {}): Observable<T> {
    const base = this.baseUrl + url + '?api_key=' + this.apiKey;
    const query = Object.keys(options)
      .map(key => key + '=' + options[key])
      .join('&');

    return this.http.get<T>(base + '&' + query);
  }
}
