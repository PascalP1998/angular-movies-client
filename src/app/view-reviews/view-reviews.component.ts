import { Component, OnInit, Input } from '@angular/core';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-view-reviews',
  standalone: true,
  imports: [],
  templateUrl: './view-reviews.component.html',
  styleUrl: './view-reviews.component.css'
})
export class ViewReviewsComponent implements OnInit {
  constructor(private reviews: ReviewsService) {}

  ngOnInit() {
    this.reviews.getReviews().then(data => {
      console.log(data);
    }).catch(error => {
      console.error(error);
    });
  }

}

