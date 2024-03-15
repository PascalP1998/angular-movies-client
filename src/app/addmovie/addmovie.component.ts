import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addmovie',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './addmovie.component.html',
  styleUrl: './addmovie.component.css'
})
export class AddmovieComponent {
  addForm = new FormGroup({
    username: new FormControl('', Validators.compose([Validators.minLength(1), Validators.required])),
    name: new FormControl('', Validators.compose([Validators.minLength(1), Validators.required])),
    rating: new FormControl('', Validators.compose([Validators.min(1), Validators.max(5), Validators.required])),
    type: new FormControl('', Validators.compose([Validators.minLength(1), Validators.required])),
  });

  constructor(private http: HttpClient, public api: ApiService) {}

  checkStatus!: string;

  barCollapse = false;

  onBarClick() {
    if (this.barCollapse) { 
      this.barCollapse = false;
    } else {
      this.barCollapse = true;
    }
  }

  onSubmit() {

    const headers = new HttpHeaders().set('Authorization', 'my-auth-token').set('Content-Type', 'application/json');

    interface ApiResponse {
      status: number;
    }

    this.http.post<ApiResponse>(`${this.api.api_url}/api/addmovie`, this.addForm.value, {headers: headers}).subscribe({
      next: (response) => {
        console.log('Erfolgreich hinzugefügt!', response);
        this.checkStatus = `${response.status}`;
      },
      error: (error) => {
        console.error('Fehler bei Hinzufügung:', error);
        this.checkStatus = `${error.status}`;
      }
    });
  }

}
