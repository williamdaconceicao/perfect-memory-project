import { Component, OnInit, Input } from '@angular/core';
import { CreditService } from 'src/app/services/credits/credits.service';
import { Observable } from 'rxjs';
import { Credits } from 'src/model/Credits.model';
import { filter, map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input()
  public showMePartially: boolean;
  @Input()
  public id: string;

  public data$: Observable<Credits>;
  public director$: Observable<string>;

  private movieId: string;

  constructor(private creditService: CreditService) {
    this.movieId = '';
  }

  ngOnInit() {
    this.movieId = this.id;
    this.showData(this.movieId);
  }

  private getData(id: string) {
    return this.creditService.searchCredit({ id });
  }

  // Here's once again we fetch the movie using his id, and store the value tah we need in a variable called data
  private showData(id: string) {
    this.data$ = this.getData(id)
      .pipe(shareReplay(1));

    this.director$ = this.data$.pipe(
      map(credits => credits.crew.find(member => member.job === 'Director')),
      filter(director => !!director),
      map(director => director.name)
    );
  }
}

