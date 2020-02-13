import { Component, OnInit, Input } from '@angular/core';
import { CreditService } from '@app/services/credits/credits.service';
import { Observable, of } from 'rxjs';
import { Credits } from '@model/Credits.model';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Movie } from '@model/Movie.model';
import { MovieService } from '@app/services/movie/movie.service';
import { LocalStorageService } from '@app/services/localstorage/localstorage.service';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./../../../assets/stylesheet/Component/movie-card/movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input()
  public showMePartially = false;
  @Input()
  public id: string;
  public isSeen: boolean;
  public isWished: boolean;
  @Input()
  public height: number;

  public data$: Observable<Credits>;
  public director$: Observable<string>;
  public movie$: Observable<Movie>;

  private movieId: string;

  constructor(
    private creditService: CreditService,
    private movieService: MovieService,
    private localStorageService: LocalStorageService,
  ) {
    this.movieId = '';
  }

  ngOnInit() {
    this.movieId = this.id;
    this.isSeen = this.localStorageService.getLocalStorage('seen', this.id);
    this.isWished = this.localStorageService.getLocalStorage('wish', this.id);
    this.showData(this.movieId);
  }

  public toggleChild() {
    this.showMePartially = !this.showMePartially;
  }

  public addLocal(value: string): void {
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
      switchMap(director => {
        return director ? of(director.name) : of('Unknown director');
      })
    );

    this.movie$ = this.movieService.searchMovie({ id });
  }
}

