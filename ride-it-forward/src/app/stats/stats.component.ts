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
  public fuelSavings: any;


  constructor(private athleteService: AthleteService, private savingsService: SavingsService) { }

  ngOnInit(): void {
    this.onGetAthlete();
    this.showSavings();
  }

  showSavings() {
    this.savingsService.calculateFuelCosts();
    this.fuelSavings = this.savingsService.totalFuelSavings;
  }
 
  private onGetAthlete() {
    //keep in this component this is getting athlete name for template
    this.athleteService.getAthlete().subscribe(responseData => {
        const responseArray = [];
        responseArray.push(responseData);
        this.loadedAthleteData = responseArray;
    });
}
}
