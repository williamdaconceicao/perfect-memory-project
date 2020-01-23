import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie } from 'src/model/Movie.model';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  // this variable is use to show the movie-card component of a movie
  public showVar = false;
  public isSeen: boolean;
  public isWished: boolean;
  @Input()
  public id: string;
  /**
   * @internal
   */
  public data$: Observable<Movie>;
  private movieId = '';

  constructor(private movieService: MovieService) { }

  // On init we fetch for a movie using his id and store the result in a variable called data
  // who is send to the .html page to be displayed to the user
  ngOnInit() {
    this.movieId = this.id || '';
    this.isSeen = this.getLocalStorage('seen');
    this.isWished = this.getLocalStorage('wish');
    this.showData(this.movieId);
  }

  public toggleChild(): void {
    this.showVar = !this.showVar;
  }

  public addLocal(value: string): void {
    this.storeLocal(value);
    if (value === 'seen') {
      this.isSeen = true;
      this.isWished = false;
    }
    if (value === 'wish') {
      this.isSeen = false;
      this.isWished = true;
    }
  }

  private storeLocal(value: string) {
    let movieLocal = localStorage.getItem('movie');
    movieLocal = movieLocal ? JSON.parse(movieLocal) : {};
    movieLocal[this.id] = value;
    localStorage.setItem('movie', JSON.stringify(movieLocal));
  }

  private getLocalStorage(value: string): boolean {
    const local = localStorage.getItem('movie');
    const storedValue = local ? JSON.parse(local)[this.id] : {};
    return storedValue !== null && storedValue === value;
  }

  private getData(id: string): Observable<Movie> {
    return this.movieService.searchMovie({ id });
  }

  private showData(id: string): void {
    this.data$ = this.getData(id);
  }
}
