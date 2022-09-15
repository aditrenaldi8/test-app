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

  updateVisitorList(value : Array<Visitor>){
    setTimeout(() => {
      this.visitorList.next(value);
    });
  }
}
