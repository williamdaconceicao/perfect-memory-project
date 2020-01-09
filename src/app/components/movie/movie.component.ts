import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  // this variable is use to show the movie-card component of a movie
  showVar: boolean = false;
	Movie_id: any;
	@Input() public id: number;

  private url: string;
  data: any = {};

  constructor(private http: HttpClient){
		this.Movie_id = '';
  }

  // On init we fetch for a movie using his id and store the result in a variable called data
  // who is send to the .html page to be displayed to the user
  ngOnInit() {
  	this.Movie_id = this.id || -1;
    this.url = "https://api.themoviedb.org/3/movie/" + this.Movie_id + "?api_key=3d50a317456bb9c2c28d3f0956c86cc3";
  	this.showData();
  }

  toggleChild(){
    this.showVar = !this.showVar;
  }

  getData(){
  	return this.http.get(this.url);
  }

  showData(){
  	this.getData()
    .subscribe((data) => {
    	this.data = data
    });
  }
}
