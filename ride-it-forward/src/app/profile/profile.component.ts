import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AthleteService } from '../athlete.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GasService } from '../gas.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loadedAthleteData = [];
  fetchedDonationData = [];
  public pic;
  public ytdRides: number;
  public ytdDistance: any;
  public allTimeRidesTotal: number;
  public allTimeDistanceTotal: any;
  public donationAmount: any;
  public nonprofit: string;

  isFetching = false;
  error = null;
  disable = false;
  hasDonated = false;

  constructor(private http: HttpClient, private athleteService: AthleteService,
    private router: Router, private route: ActivatedRoute, private gasService: GasService) { }

  ngOnInit(): void {
    // this.gasService.onFetchPrice();
    // this.gasService.onFetchState();
    this.onGetAthlete();
    this.onGetAthleteStats();
    this.fetchDonationData();
    //need hasDonated to be false on first visit, so I need to call fetchDonation in a diff spot
    console.log('reloaded!');
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
        //console.log(responseData);
        this.ytdRides = responseData['ytd_ride_totals'].count;
        this.ytdDistance = Math.round(responseData['ytd_ride_totals'].distance / 1.60934) / 1000;
        this.ytdDistance = this.ytdDistance.toFixed(2);
        this.ytdDistance = this.formatNumber(this.ytdDistance);
        this.allTimeRidesTotal = responseData['all_ride_totals'].count;
        this.allTimeDistanceTotal = Math.round(responseData['all_ride_totals'].distance / 1.60934) / 1000;
        this.allTimeDistanceTotal = this.allTimeDistanceTotal.toFixed(2);
        this.allTimeDistanceTotal = this.formatNumber(this.allTimeDistanceTotal);
    });
}

fetchDonationData() {
  this.http.get('https://ride-it-forward-default-rtdb.firebaseio.com/donation.json'
  ).subscribe( responseData => {
    //console.log(responseData);
    //console.log(responseData['amount']);
    if (responseData === null) {
      console.log('No data yet!')
    } else {
    this.hasDonated = true;
    this.donationAmount = responseData['amount'];
    this.nonprofit = responseData['nonprofit']
    }
    // const donationArray = [];
    // donationArray.push(responseData);
    // this.fetchedDonationData = donationArray;
    //console.log(this.fetchedDonationData);
    //might have to push to an array and use ngIf in template
  })
}

onClearDonationData() {
  this.http.delete('https://ride-it-forward-default-rtdb.firebaseio.com/donation.json'
  ).subscribe(() => {
    this.hasDonated = false;
    //this.router.navigate(['/'], {relativeTo: this.route});
    //how to get this to actually reload page?!
    // let currentUrl = this.router.url;
    // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    //     this.router.navigate([currentUrl]);
    // });
  });
}

}
