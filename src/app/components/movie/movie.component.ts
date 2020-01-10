
import { Component, OnInit, Input } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
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
  private MovieId: any;

  @Input() public id: number;

  /**
   * @internal
   */

  public data$: Observable<Movie>;
  constructor(private movieService: MovieService) {
    this.MovieId = '';
  }

  // On init we fetch for a movie using his id and store the result in a variable called data
  // who is send to the .html page to be displayed to the user
  ngOnInit() {
    this.MovieId = this.id || -1;
    this.showData(this.MovieId);
  }

  public toggleChild() {
    this.showVar = !this.showVar;
  }

  public addLocal(id: string, value: string) {
    localStorage[id] = value;
  }

  private getData(id: string) {
    return this.movieService.searchMovie({ id });
  }

  private showData(id: string) {
    this.data$ = this.getData(id);
  }
}
