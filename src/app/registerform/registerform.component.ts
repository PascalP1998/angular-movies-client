import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registerform',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './registerform.component.html',
  styleUrl: './registerform.component.css'
})
export class RegisterformComponent {
  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private http: HttpClient, public api: ApiService) {}

  onSubmit() {

    const headers = new HttpHeaders().set('Authorization', 'my-auth-token').set('Content-Type', 'application/json');

    this.http.post(`${this.api.api_url}/api/registerUser`, this.registerForm.value, {headers: headers}).subscribe({
      next: (response) => {
        console.log('Erfolgreich registriert!', response);
      },
      error: (error) => {
        console.error('Fehler bei der Registrierung:', error);
      }
    });
  }

}
