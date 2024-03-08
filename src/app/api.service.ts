import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_url = "http://localhost:4000";
  constructor() { }
}
