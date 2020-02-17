import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '@app/services/movie/movie.service';
import { Movie } from '@model/Movie.model';
import { LocalStorageService } from '@app/services/localstorage/localstorage.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./../../../assets/stylesheet/Component/movie/movie.component.scss'],
})
export class MovieComponent implements OnInit {
  // this variable is use to show the movie-card component of a movie
  public showVar = false;
  public isSeen: boolean;
  public isWished: boolean;
  public height: number;
  @Input()
  public id: string;
  /**
   * @internal
   */
  public data$: Observable<Movie>;
  private movieId = '';

  constructor(
    private movieService: MovieService,
    private localStorageService: LocalStorageService,
  ) {}

  // On init we fetch for a movie using his id and store the result in a variable called data
  // who is send to the .html page to be displayed to the user
  ngOnInit() {
    this.movieId = this.id || '';
    this.isSeen = this.localStorageService.getLocalStorage('seen', this.id);
    this.isWished = this.localStorageService.getLocalStorage('wish', this.id);
    this.showData(this.movieId);
  }

  public toggleChild(value): void {
    this.showVar = !value;
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

  private getData(id: string): Observable<Movie> {
    return this.movieService.searchMovie({ id });
  }

  private showData(id: string): void {
    this.data$ = this.getData(id);
  }
}
