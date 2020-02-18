import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { CreditService } from '@app/services/credits/credits.service';
import { Observable } from 'rxjs';
import { Credits } from '@model/Credits.model';
import { map, shareReplay } from 'rxjs/operators';
import { Movie } from '@model/Movie.model';
import { MovieService } from '@app/services/movie/movie.service';
import { LocalStorageService } from '@app/services/localstorage/localstorage.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent implements OnInit {
  @Input()
  public isCardShown = false;
  @Input()
  public id: string;
  @Output()
  public showChild = new EventEmitter();

  public isSeen: boolean;
  public isWished: boolean;


  public data$: Observable<Credits>;
  public director$: Observable<string>;
  public movie$: Observable<Movie>;


  constructor(
    private creditService: CreditService,
    private movieService: MovieService,
    private localStorageService: LocalStorageService,
  ) {}

  public ngOnInit() {
    this.isSeen = this.localStorageService.getLocalStorage('seen', this.id);
    this.isWished = this.localStorageService.getLocalStorage('wish', this.id);
    this.showData(this.id);
  }

  public toggleChild() {
    this.showChild.emit(this.isCardShown);
  }

  public addToList(value: string): void {
    this.localStorageService.storeLocal(value, this.id);
    if (value === 'seen') {
      this.isSeen = true;
      this.isWished = false;
    }
    if (value === 'wish') {
      this.isSeen = false;
      this.isWished = true;
    }
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
      map(director => {
        return director ? director.name : 'Unknown director';
      })
    );

    this.movie$ = this.movieService.searchMovie({ id });
  }
}

