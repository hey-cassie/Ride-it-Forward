import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AthleteService } from '../athlete.service';
import { AuthService } from '../auth/auth.service';
import { SavingsService } from '../shared/loading-spinner/savings.service';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css']
})
export class DonationFormComponent implements OnInit {
  public donateForm: FormGroup;
  // public totalSavings: any = this.savingsService.totalFuelSavings;
  // public halfSavings: any = this.savingsService.halfSavings;
  // public quarterSavings: any = this.savingsService.quarterSavings;
  public gasPrice: number = 2.87;
  public totalSavings: any;
  public halfSavings: any;
  public quarterSavings: any;
  //public name: string;
  submitted = false;
  public userToken: string;

  constructor(private athleteService: AthleteService, 
    private savingsService: SavingsService, 
    private http: HttpClient,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
    //this.getAthleteName();
    this.donateForm = new FormGroup({
      'userData': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'nonprofit': new FormControl("Search"),
      'amount': new FormControl("Amount"),
      'details': new FormControl(null)
    });
  }

  initForm() {
    //video 227
    this.athleteService.getAthleteStats().subscribe(responseData => {
      this.totalSavings = Math.round(responseData['ytd_ride_totals'].distance / 1.60934) / 1000;
      this.totalSavings = ((this.totalSavings / 25) * this.gasPrice).toFixed(2);
      this.halfSavings = (this.totalSavings * .5).toFixed(2);
      this.quarterSavings = (this.totalSavings * .25).toFixed(2);
    });
  }

  // getAthleteName() {
  //   this.athleteService.getAthlete().subscribe(responseData => {
  //       this.name = responseData['firstname'];
  //   });
  // }

  onSubmit(){
    //console.log(this.donateForm);
    this.submitted = true;
    //this.storeDonationData();
    this.openModal();
  }

  openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  closeModal() {
    document.getElementById("myModal").style.display = "none";
    //this.fetchDonationData()
    this.navigateToProfile()
    this.donateForm.reset({
      name: '',
      email: '',
      nonprofit: 'Search',
      amount: 'Amount',
      details: ''
    });
  }

  storeDonationData() {
        const donationData = this.donateForm.value;
        this.authService.user.pipe(take(1)).subscribe(user => {
          this.userToken = user.token;
        })
        this.http
        .put(
          'https://ride-it-forward-default-rtdb.firebaseio.com/donation.json?auth=' + this.userToken, 
          donationData
          ).subscribe( response => {
          //put request overrides any data we previously stored
          //http requests are only sent when we subscribe
          console.log(response);
          });
  }

  // fetchDonationData() {
  //   this.http.get('https://ride-it-forward-default-rtdb.firebaseio.com/donation.json'
  //   ).subscribe( responseData => {
  //     console.log(responseData);
  //     console.log(responseData['amount']);
  //   })
  // }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

}
