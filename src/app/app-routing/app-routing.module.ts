import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {VoterComponent} from '../voter/voter.component';

const appRoutes: Routes = [
  {
    path: 'voter',
    component: VoterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
