import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { NewsResponse } from '../interfaces/news-response';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  // topHeadlinesPath = environment.baseURL;

  constructor(private http: HttpClient) {}

  getTopCountryHeadlines(
    country: string,
    category: string,
    pages: number
  ): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(
              `https://newsapi.org/v2/top-headlines/?country=${country}&category=${category}&pageSize=10&apiKey=76be927b28d14be6ad1ebd82981a685f&page=${pages}`
    );
  }
}
