import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'testing-app';

  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    let data = localStorage.getItem('visitor')
    if (data) {
      this.appService.updateVisitorList(JSON.parse(data));
    }
  }

  changePage(path) {
    this.router.navigate(['/' + path]);
  }
}
