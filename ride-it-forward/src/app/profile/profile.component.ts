import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//declare var require: any

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public firstName: string = '';

  //declare var require: any

  ngOnInit(): void {
    this.getAthlete();
    //this.getLoggedInAthlete();
   }  

     //"https://www.strava.com/api/v3/athlete" "Authorization: Bearer [[token]]"
  private getAthlete() {
      this.http.get(
        'https://www.strava.com/api/v3/athlete',
        {
          headers: new HttpHeaders({'Authorization': 'Bearer b641c44393cc2205d4e2d727066caf9f98a255ac'})
        }
        ).subscribe(response => {
          //should i create a object model here?
          console.log(response);
          //this.firstName = response.firstname;
          //let str = JSON.stringify(response);
          //console.log(str);
      });
  }

  // getLoggedInAthlete() {
  //   const athleteLink: string =  "https://www.strava.com/api/v3/athlete/activities?access_token=b641c44393cc2205d4e2d727066caf9f98a255ac";

  //   fetch(athleteLink)
  //   .then(response => console.log(response.json()))
  // }

   //"https://www.strava.com/api/v3/athlete" "Authorization: Bearer [[token]]"
  //   var StravaApiV3 = require('strava_api_v3');
  //   var defaultClient = StravaApiV3.ApiClient.instance;

  //   // Configure OAuth2 access token for authorization: strava_oauth
  //   var strava_oauth = defaultClient.authentications['strava_oauth'];
  //   strava_oauth.accessToken = "b619685d4ad4707229a067b368c432c226beed54"

  //   var api = new StravaApiV3.AthletesApi()

  //   var callback = function(error, data, response) {
  //       if (error) {
  //         console.error(error);
  //       } else {
  //         console.log('API called successfully. Returned data: ' + data);
  //       }
  //   };
  //   api.getLoggedInAthlete(callback);
}
