import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  showVar: boolean = true;

  toggleChild(){
    this.showVar = !this.showVar;
  }
	Movie_id: any;
	@Input() public id: number;

  private url: string;
  data: any = {};

  constructor(private http: HttpClient){
		this.Movie_id = '';
  }

  ngOnInit() {
  	this.Movie_id = this.id || -1;
    this.url = "https://api.themoviedb.org/3/movie/" + this.Movie_id + "?api_key=3d50a317456bb9c2c28d3f0956c86cc3";
  	this.showData();
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
