import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'testing-app';

  constructor(
    private router: Router
  ) { }


  changePage(path) {
    this.router.navigate(['/' + path]);
  }
}
