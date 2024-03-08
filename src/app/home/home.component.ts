import { Component } from '@angular/core';
import { RegisterformComponent } from '../registerform/registerform.component';
import { LoginformComponent } from '../loginform/loginform.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterformComponent, LoginformComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
