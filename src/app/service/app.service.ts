import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Visitor } from "../model/visitor";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { 

  }

  visitorList = new BehaviorSubject([]);

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
  ];

  updateVisitorList(value : Array<Visitor>){
    setTimeout(() => {
      this.visitorList.next(value);
    });
  }
}
