import { Component, OnInit } from '@angular/core';

import { AthleteService } from '../athlete.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  public loadedAthleteData = [];
  public ytdDistance: number;
  public fuelSavings: number;
  public gasPrice: number = 2.77;

  constructor(private athleteService: AthleteService) { }

  ngOnInit(): void {
    this.calculateFuelCosts();
    this.onGetAthlete();
  }

  formatNumber(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  private calculateFuelCosts() {
    this.athleteService.getAthleteStats().subscribe(responseData => {
      this.fuelSavings = Math.round(responseData['ytd_ride_totals'].distance / 1.60934) / 1000;
      //this.allTimeDistanceTotal = this.formatNumber(this.allTimeDistanceTotal);
      // this.ytdDistance = this.ytdDistance / 25;
      // this.ytdDistance = this.ytdDistance * this.gasPrice;
      // this.ytdDistance = this.formatNumber(this.ytdDistance)
      // console.log(this.ytdDistance);
      this.fuelSavings = (this.fuelSavings / 25) * this.gasPrice;
      this.formatNumber(this.fuelSavings);
      //this.fuelSavings = this.fuelSavings.toFixed(2);
      console.log(this.fuelSavings);
      //return this.fuelSavings;
    })
  }

  private onGetAthlete() {
    this.athleteService.getAthlete().subscribe(responseData => {
        const responseArray = [];
        responseArray.push(responseData);
        this.loadedAthleteData = responseArray;
        }, error => {
           //this.error = error.message;
    });
}
}
