import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchKrsComponent } from './components/search-krs/search-krs.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchKrsComponent
  },
  { path: '', redirectTo: 'search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KrsRoutingModule { }
