import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registerform',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './registerform.component.html',
  styleUrl: './registerform.component.css'
})
export class RegisterformComponent {
  registerForm = new FormGroup({
    username: new FormControl('', Validators.compose([Validators.minLength(1), Validators.required])),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    password: new FormControl('', Validators.compose([Validators.minLength(8), Validators.required])),
  });

  constructor(private http: HttpClient, public api: ApiService) {}

  checkStatus!: string;


  onSubmit() {

    const headers = new HttpHeaders().set('Authorization', 'my-auth-token').set('Content-Type', 'application/json');

    /*if (this.registerForm.value.email == '' || this.registerForm.value.email?.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")) {

    }*/

    interface ApiResponse {
      status: number;
    }

    this.http.post<ApiResponse>(`${this.api.api_url}/api/registerUser`, this.registerForm.value, {headers: headers}).subscribe({
      next: (response) => {
        console.log('Erfolgreich registriert!', response);
        this.checkStatus = `${response.status}`;
      },
      error: (error) => {
        console.error('Fehler bei der Registrierung:', error);
        this.checkStatus = `${error.status}`;
      }
    });
  }

}
