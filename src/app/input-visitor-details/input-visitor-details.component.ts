import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, } from "@angular/forms";

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {

  constructor() { }

  visitorForm : FormGroup;

  ngOnInit(): void {
    this.initForm();
    this.valueChanges();

  }

  initForm () {
    this.visitorForm = new FormGroup({
      fullName: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  valueChanges () {
    this.visitorForm.get('fullName').valueChanges.subscribe(
      value => {
        console.log(value);
        console.log(this.visitorForm.controls['fullName'].errors)
      }
    )
  }

}
