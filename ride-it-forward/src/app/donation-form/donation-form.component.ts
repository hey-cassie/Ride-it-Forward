import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SavingsService } from '../shared/loading-spinner/savings.service';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css']
})
export class DonationFormComponent implements OnInit {
  donateForm: FormGroup;
  public totalSavings: any = this.savingsService.totalFuelSavings;
  public halfSavings: any = this.savingsService.halfSavings;
  public quarterSavings: any = this.savingsService.quarterSavings;
  submitted = false;

  constructor(private savingsService: SavingsService) { }

  ngOnInit(): void {
    //this.initForm();
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

  // initForm() {
  //   //video 227
  // }

  onSubmit(){
    console.log(this.donateForm);
    this.submitted = true;
    this.openModal();
  }

  openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  closeModal() {
    document.getElementById("myModal").style.display = "none";
    this.donateForm.reset({
      name: '',
      email: '',
      nonprofit: 'Search',
      amount: 'Amount',
      details: ''
    });
  }

}
