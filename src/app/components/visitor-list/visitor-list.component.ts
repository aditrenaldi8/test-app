import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, } from "@angular/forms";
import { Visitor } from "../../model/visitor";
import { AppService } from "../../service/app.service";

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  data: Visitor[] = [];
  filteredData: Visitor[] = [];
  displayedColumns: string[] = ['no', 'identityNumber', 'name', 'phone', 'poli', 'timestamp'];
  form: FormGroup;
  now: any;

  ngOnInit(): void {
    this.initForm();
    this.valueChanges();
    this.now = new Date().toLocaleDateString();
    this.appService.visitorList.subscribe(value => {
      this.data = value;
      this.filteredData = value;
      console.log(value)
    });
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(''),
      identityNumber: new FormControl(''),
      date: new FormControl()
    });
    setTimeout(()=> {
      this.form.get('date').setValue(new Date());
    }, 100)
  }

  valueChanges() {
    this.form.get('name').valueChanges.subscribe(
      () => {
        this.search();
      }
    )

    this.form.get('identityNumber').valueChanges.subscribe(
      () => {
        this.search();
      }
    )

    this.form.get('date').valueChanges.subscribe(
      () => {
        this.search();
        let date = this.form.get('date').value
        this.now = date && date._i ? (date._i.month+1) +'/'+ date._i.date+'/' + date._i.year : new Date().toLocaleDateString();
      }
    )
  }

  search () {
    let name = this.form.get('name').value
    let identityNumber = this.form.get('identityNumber').value
    let date = this.form.get('date').value
    let formatedDate = date && date._i ? (date._i.month+1) +'/'+ date._i.date+'/' + date._i.year : date.toLocaleDateString()
    console.log(date)
    console.log(formatedDate)

    this.filteredData = this.data.filter(item => { 
      return (
        item.identityNumber.toLowerCase().includes(identityNumber.toLowerCase()) && 
        item.fullName.toLowerCase().includes(name.toLowerCase()) &&
        item.timestamp.includes(formatedDate)
      )
    });
  }

  getData(data: Visitor) {
    console.log(data)
  }

}
