import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsksComponent } from './asks.component';
import { DetailAskComponent } from './detail-ask/detail-ask.component';

const routes: Routes = [
  { path: '', component: AsksComponent },
  { path: 'detail/:id', component: DetailAskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsksRoutingModule {}
