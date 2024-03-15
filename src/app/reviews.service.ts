import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient, private api: ApiService) { }

  private headers = new HttpHeaders().set('Authorization', 'my-auth-token').set('Content-Type', 'application/json');

  private apiUrl = `${this.api.api_url}/api/getreviews`;

  private reviewsData: any;

  getReviews(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl, { headers: this.headers }).subscribe({
        next: (data) => {
          this.reviewsData = data;
          resolve(this.reviewsData);
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  }
}
