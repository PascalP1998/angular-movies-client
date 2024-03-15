import { Component } from '@angular/core';
import { AddmovieComponent } from '../addmovie/addmovie.component';
import { ViewReviewsComponent } from '../view-reviews/view-reviews.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AddmovieComponent, ViewReviewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
