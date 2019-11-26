import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
	Movie_id: any;
  @Input() showMePartially: boolean;
	@Input() public id: string;

  private MovieUrl: string;
  data: any = {};

  constructor(private http: HttpClient){
		this.Movie_id = '';
  }

  ngOnInit() {
  	this.Movie_id = this.id;
    this.MovieUrl = "https://api.themoviedb.org/3/movie/" + this.Movie_id + "?api_key=3d50a317456bb9c2c28d3f0956c86cc3&append_to_response=credits";
  	this.showData();
  }

  getMovie(){
  	return this.http.get(this.MovieUrl);
  }

  showData(){
  	this.getMovie()
    .subscribe((data?: any) => {
    	let directors = []
    	data.credits.crew.forEach((entry) =>{
		    if (entry.job === 'Director') {
		        directors.push(entry.name);
		    }
			})
			data.directors = directors.join(', ');
			this.data = data
    });
  }
}

