import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AthleteService } from '../athlete.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loadedAthleteData = [];
  public pic;
  public ytdRides: number;
  public ytdDistance: number;
  public allTimeRidesTotal: number;
  public allTimeDistanceTotal: number

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

  formatNumber(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  private onGetAthleteStats() {
      this.athleteService.getAthleteStats().subscribe(responseData => {
        console.log(responseData);
        this.ytdRides = responseData['ytd_ride_totals'].count;
        this.ytdDistance = Math.round(responseData['ytd_ride_totals'].distance / 1.60934) / 1000;
        this.ytdDistance = this.formatNumber(this.ytdDistance);
        this.allTimeRidesTotal = responseData['all_ride_totals'].count;
        this.allTimeDistanceTotal = Math.round(responseData['all_ride_totals'].distance / 1.60934) / 1000;
        this.allTimeDistanceTotal = this.formatNumber(this.allTimeDistanceTotal);
    });
}

}
