import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { AppService } from "../../service/app.service";
import { MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css']
})
export class RequestQueueNumberComponent implements OnInit {

  @ViewChild('dialog') MyDialog: TemplateRef<any>;

  constructor(
    private appService: AppService,
    public dialog: MatDialog
  ) { }

  poliList: Array<any> = this.appService.poliList;
  queueList: Array<any>;
  queueListNumber: Array<any>;

  selectedData: Object;

  ngOnInit(): void {
    this.createQueueList();
    this.createQueueListNumber();
  }

  createQueueList () {
    let data = [];
    this.poliList.forEach(item => {
      data.push({
        poli: item.name,
        code: item.code,
        queueNumber: 1,
        queueString: '001',
        datetime: null
      })
    })

    this.queueList = data
  }

  createQueueListNumber () {
    let data = [];
    this.poliList.forEach(item => {
      data.push({
        poli: item.name,
        code: item.code,
        data: []
      })
    })

    this.queueListNumber = data
  }

  print (index: number) {
    this.selectedData = {};
    this.queueList[index].datetime = new Date().toLocaleString();
    Object.assign(this.selectedData, this.queueList[index]);
    this.updateValue(index);
    this.dialog.open(this.MyDialog);

    setTimeout(() => {
      this.queueListNumber[index].data.push(this.selectedData);
    }, 100)
  }

  updateValue (index: number) {
    this.queueList[index].queueNumber += 1;
    this.queueList[index].queueString = '00'+ this.queueList[index].queueNumber
  }

}
