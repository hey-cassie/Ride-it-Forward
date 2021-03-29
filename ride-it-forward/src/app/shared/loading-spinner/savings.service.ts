import { Injectable } from '@angular/core';
import { AthleteService } from 'src/app/athlete.service';

@Injectable({providedIn: 'root'})
export class SavingsService {
    public ytdDistance: number;
    public gasPrice: number = 2.77;
    public totalFuelSavings: any;
    public halfSavings: any;
    public quarterSavings: any;

    constructor(private athleteService: AthleteService) {}

    formatNumber(number) {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
    
      calculateFuelCosts() {
        this.athleteService.getAthleteStats().subscribe(responseData => {
          this.totalFuelSavings = Math.round(responseData['ytd_ride_totals'].distance / 1.60934) / 1000;
          //this.allTimeDistanceTotal = this.formatNumber(this.allTimeDistanceTotal);
          // this.ytdDistance = this.ytdDistance / 25;
          // this.ytdDistance = this.ytdDistance * this.gasPrice;
          // this.ytdDistance = this.formatNumber(this.ytdDistance)
          // console.log(this.ytdDistance);
          this.totalFuelSavings = ((this.totalFuelSavings / 25) * this.gasPrice).toFixed(2);
          this.halfSavings = (this.totalFuelSavings * .5).toFixed(2);
          this.quarterSavings = (this.totalFuelSavings * .25).toFixed(2);
          //this.fuelSavings = this.fuelSavings.toFixed(2) why is fuelSavings a string right now?
          this.formatNumber(this.totalFuelSavings);
          this.formatNumber(this.halfSavings);
          this.formatNumber(this.quarterSavings);
          //this.fuelSavings = this.fuelSavings.toFixed(2);
          //console.log(this.fuelSavings);
          //return this.fuelSavings;
        })
      }
}