import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AthleteService {

    constructor(private http: HttpClient) { }

    getAthlete() {
      //reminder: this function is controlling the template/error handling
        return this.http
        .get('https://www.strava.com/api/v3/athlete',
            {
              headers: new HttpHeaders({'Authorization': 'Bearer 48404bd7c7dd8be555541d93ece1bbdd9b73bc11'})
            }
             );
    }

    getAthleteStats() {
        return this.http
        .get('https://www.strava.com/api/v3/athletes/5663363/stats',
          {
            headers: new HttpHeaders({'Authorization': 'Bearer 48404bd7c7dd8be555541d93ece1bbdd9b73bc11'})
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