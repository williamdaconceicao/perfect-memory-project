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
  private MovieId = '';

  constructor(private movieService: MovieService) { }

  // On init we fetch for a movie using his id and store the result in a variable called data
  // who is send to the .html page to be displayed to the user
  ngOnInit() {
    this.MovieId = this.id || '';
    this.isSeen = this.getLocalStorage('seen');
    this.isWished = this.getLocalStorage('wish');
    this.showData(this.MovieId);
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
    let MovieLocal = localStorage.getItem('movie');
    MovieLocal = MovieLocal ? JSON.parse(MovieLocal) : {};
    MovieLocal[this.id] = value;
    localStorage.setItem('movie', JSON.stringify(MovieLocal));
  }

  private getLocalStorage(value: string): boolean {
    const temp = localStorage.getItem('movie');
    const storedValue = temp ? JSON.parse(temp)[this.id] : {};
    return storedValue !== null && storedValue === value;
  }

  private getData(id: string): Observable<Movie> {
    return this.movieService.searchMovie({ id });
  }

  private showData(id: string): void {
    this.data$ = this.getData(id);
  }
}
