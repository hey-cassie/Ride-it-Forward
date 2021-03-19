import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AthleteService {

    constructor(private http: HttpClient) { }

    getAthlete() {
        return this.http
        .get('https://www.strava.com/api/v3/athlete',
            {
              headers: new HttpHeaders({'Authorization': 'Bearer 6f96d08f1e52b98655e3b5040a0045dda605b711'})
            }
             );
    }

    getAthleteStats() {
        return this.http
        .get('https://www.strava.com/api/v3/athletes/5663363/stats',
          {
            headers: new HttpHeaders({'Authorization': 'Bearer 6f96d08f1e52b98655e3b5040a0045dda605b711'})
          }
           );
          // .pipe(map(responseData => {
          //   const responseArray = [];
          //   for (const key in responseData) {
          //     if (responseData.hasOwnProperty(key)) {
          //     responseArray.push({...responseData[key]})
          //     }
          //   }
          //   return responseArray;
          // }))
    }
}