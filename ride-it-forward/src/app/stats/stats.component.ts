import { Component, OnInit } from '@angular/core';

import { AthleteService } from '../athlete.service';
import { SavingsService } from '../shared/loading-spinner/savings.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  public loadedAthleteData = [];
  public gasPrice: number = 2.87;
  public totalFuelSavings: any;
  public halfSavings: any;
  public quarterSavings: any;
  isFetching = false;
  //public fuelSavings: any;
  //public name: string;

  constructor(private athleteService: AthleteService, private savingsService: SavingsService) { }

  ngOnInit(): void {
    this.onGetAthlete();
    this.onShowAthleteSavings();
    //this.showSavings();
  }

  // showSavings() {
  //   this function works, but for some reason (I think it has to do with
  //   where I'm subscribing), the number will only appear on the second instance.
  //   this.savingsService.calculateFuelCosts();
  //   this.fuelSavings = this.savingsService.totalFuelSavings;
  // }

  formatNumber(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  private onShowAthleteSavings() {
    this.isFetching = true;
    this.athleteService.getAthleteStats().subscribe(responseData => {
      this.isFetching = false;
      this.totalFuelSavings = Math.round(responseData['ytd_ride_totals'].distance / 1.60934) / 1000;
      this.totalFuelSavings = ((this.totalFuelSavings / 25) * this.gasPrice).toFixed(2);
      this.formatNumber(this.totalFuelSavings);
    });
  }
 
  private onGetAthlete() {
    //keep in this component this is getting athlete name for template
    this.athleteService.getAthlete().subscribe(responseData => {
        const responseArray = [];
        // this.name = responseData['firstname'];
        // console.log(this.name);
        responseArray.push(responseData);
        this.loadedAthleteData = responseArray;
    });
  }

}
