import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KrsRoutingModule } from './krs-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchKrsComponent } from './components/search-krs/search-krs.component';


@NgModule({
  declarations: [SearchKrsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    KrsRoutingModule,
  ]
})
export class KrsModule { }
