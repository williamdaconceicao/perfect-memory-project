import { Component, OnInit, Input } from '@angular/core';
import { CreditService } from 'src/app/services/credits/credits.service';
import { Observable } from 'rxjs';
import { Credits } from 'src/model/Credits.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  private MovieId: string;
  @Input() public showMePartially: boolean;
  @Input() private id: string;

  public data$: Observable<Credits>;

  constructor(private creditService: CreditService) {
    this.MovieId = '';
  }

  ngOnInit() {
    this.MovieId = this.id;
    this.showData(this.MovieId);
  }

  private getData(id: string) {
    return this.creditService.searchCredit({ id });
  }

  // Here's once again we fetch the movie using his id, and store the value tah we need in a variable called data
  // But we want only the director name and the first 10 actors
  private showData(id: string) {
    this.data$ = this.getData(id);
  }
}

