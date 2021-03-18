import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAthlete();
    this.getAthleteStats();
   }  

  private getAthlete() {
      this.isFetching = true;
      this.http.get(
        'https://www.strava.com/api/v3/athlete',
        {
          headers: new HttpHeaders({'Authorization': 'Bearer fddd429b60854e3187700610c25202894ff0c806'})
        }
         )
        // .pipe(map(responseData => {
        //   const responseArray = [];
        //   for (const key in responseData) {
        //     if (responseData.hasOwnProperty(key)) {
        //     responseArray.push(responseData[key])
        //     }
        //   }
        //   return responseArray;
        // }))
        .subscribe(responseData => {
          this.isFetching = false;
          //console.log(responseData);
          //console.log(this.firstName);
          this.pic = responseData['profile'];
          const responseArray = [];
          responseArray.push(responseData);
          this.loadedAthleteData = responseArray;
        }, error => {
            this.error = error.message;
            //console.log(error);
      });
  }


  private getAthleteStats() {
    this.http.get(
      'https://www.strava.com/api/v3/athletes/5663363/stats',
      {
        headers: new HttpHeaders({'Authorization': 'Bearer fddd429b60854e3187700610c25202894ff0c806'})
      }
       )
      // .pipe(map(responseData => {
      //   const responseArray = [];
      //   for (const key in responseData) {
      //     if (responseData.hasOwnProperty(key)) {
      //     responseArray.push({...responseData[key]})
      //     }
      //   }
      //   return responseArray;
      // }))
      .subscribe(responseData => {
        this.ytdRides = responseData['ytd_ride_totals'].count;
        this.ytdDistance = Math.round(responseData['ytd_ride_totals'].distance / 1.60934) / 1000;
        console.log(responseData['all_ride_totals'].count);
        //console.log(responseData[2].count);
        // const responseArr = [];
        // responseArr.push(responseData);
        // console.log(responseArr);
        //console.log(responseData[2].count);
    });
}

}
