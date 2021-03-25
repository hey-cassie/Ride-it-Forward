import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css']
})
export class DonationFormComponent implements OnInit {
  donateForm: FormGroup;
  public savingsAmount: number = 666;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.donateForm = new FormGroup({
      'userData': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'nonprofit': new FormControl("Search", Validators.required),
      //'nonprofit': new FormControl({value:"Search", disabled: true}, Validators.required),
      'amount': new FormControl("Amount", Validators.required),
      'details': new FormControl(null)
      //amount will be changed from null to savings number eventually
    });
  }

  onSubmit(){
    console.log(this.donateForm);
    this.submitted = true;
    this.openModal();
  }

  openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  closeModal() {
    //this.donateForm.details = '';
    document.getElementById("myModal").style.display = "none";
  }

}
