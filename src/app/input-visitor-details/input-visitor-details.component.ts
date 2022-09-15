import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormControl, } from "@angular/forms";
import { numberValidator } from "../validators/number.validator"
import { whitespaceValidator } from "../validators/whitespace.validator"
import { MatDialog} from "@angular/material/dialog";
import { AppService } from "../service/app.service";
import { Visitor } from "../model/visitor";
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {

  @ViewChild('dialog') MyDialog: TemplateRef<any>;

  constructor(
    public dialog: MatDialog,
    private appService: AppService
  ) {}

  visitorForm: FormGroup;
  visitorListTemp: Array<Visitor>;
  now: any;

  poliList: Array<any> = [
    {
      code: 'A',
      name: 'Poli Umum'
    },
    {
      code: 'B',
      name: 'Poli Gigi'
    },
    {
      code: 'C',
      name: 'Poli Mata'
    },
    {
      code: 'D',
      name: 'Poli THT'
    }
  ]

  ngOnInit(): void {
    this.initForm();
    this.now = new Date();

    this.appService.visitorList.subscribe(value => {
      this.visitorListTemp = value;
      console.log(value)
    });
  }

  initForm () {
    this.visitorForm = new FormGroup({
      fullName: new FormControl('',[whitespaceValidator, Validators.minLength(3)]),
      IdentityNumber: new FormControl('',[whitespaceValidator]),
      phone: new FormControl('', [Validators.required, numberValidator, Validators.minLength(8), Validators.maxLength(12)]),
      birthDate: new FormControl('', [Validators.required]),
      address: new FormControl('', [whitespaceValidator]),
      poli: new FormControl('', [Validators.required]),
      reason: new FormControl('', [whitespaceValidator]),
      complaint: new FormControl('', [whitespaceValidator])
    });
  }

  getDate (data : any): string {
    return data.date +'/' + (data.month+1) +'/' + data.year
  }

  getPoli (data : String): Object {
    let value = this.poliList.filter(item => item.code === data)
    return value
  }

  save () {
    if (!this.visitorForm.valid) {
      Object.keys(this.visitorForm.controls).forEach(key => {
        this.visitorForm.get(key).markAsTouched();
      })
    } else {
      let data = new Visitor({});
      data.IdentityNumber = this.visitorForm.get('IdentityNumber').value;
      data.fullName = this.visitorForm.get('fullName').value;
      data.phone = this.visitorForm.get('phone').value;
      data.address = this.visitorForm.get('address').value;
      data.birthDate = this.getDate(this.visitorForm.get('birthDate').value._i);
      data.poli = this.getPoli(this.visitorForm.get('poli').value);
      data.reason = this.visitorForm.get('reason').value;
      data.complaint = this.visitorForm.get('complaint').value;
      data.timestamp = new Date().toLocaleString();

      this.visitorListTemp.push(data);

      this.appService.updateVisitorList(this.visitorListTemp);

      this.openDialog()
    }
  }

  openDialog() {
    this.dialog.open(this.MyDialog);
}

}
