import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsksRoutingModule } from './asks-routing.module';
import { AsksComponent } from './asks.component';
import { DateAgoPipe } from 'src/app/shared/pipe/date-ago.pipe';
import { DetailAskComponent } from './detail-ask/detail-ask.component';

@NgModule({
  declarations: [AsksComponent, DateAgoPipe, DetailAskComponent],
  imports: [CommonModule, AsksRoutingModule],
})
export class AsksModule {}
