import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
  declarations: [OverviewComponent, DetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NewsRoutingModule,
  ],
})
export class NewsModule {
}
