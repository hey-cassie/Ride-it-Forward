import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AthleteService } from '../athlete.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loadedAthleteData = [];
  public pic;

  //public loadedAthleteStats = [];
  public ytdRides: number;
  public ytdDistance: number;

  isFetching = false;
  error = null;
  disable = false;

  constructor(private http: HttpClient, private athleteService: AthleteService) { }

  ngOnInit(): void {
    this.onGetAthlete();
    this.onGetAthleteStats();
   }  

  private onGetAthlete() {
      this.isFetching = true;
      this.athleteService.getAthlete().subscribe(responseData => {
          this.isFetching = false;
          this.pic = responseData['profile'];
          const responseArray = [];
          responseArray.push(responseData);
          this.loadedAthleteData = responseArray;
          }, error => {
             this.error = error.message;
             this.disable = true;
      });
  }


  private onGetAthleteStats() {
      this.athleteService.getAthleteStats().subscribe(responseData => {
        this.ytdRides = responseData['ytd_ride_totals'].count;
        this.ytdDistance = Math.round(responseData['ytd_ride_totals'].distance / 1.60934) / 1000;
        console.log(responseData['all_ride_totals'].count);
    });
}

}
