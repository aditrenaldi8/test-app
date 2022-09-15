import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputVisitorDetailsComponent } from './components/input-visitor-details/input-visitor-details.component';
import { MenuComponent } from './components/menu/menu.component';
import { RequestQueueNumberComponent } from './components/request-queue-number/request-queue-number.component';
import { VisitorListComponent } from './components/visitor-list/visitor-list.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'request-queue-number', component: RequestQueueNumberComponent},
  {path: 'input-visitor-details', component: InputVisitorDetailsComponent},
  {path: 'visitor-list', component: VisitorListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
