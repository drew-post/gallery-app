import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtDetailsComponent } from './art-details.component';

const routes: Routes = [{ path: '', component: ArtDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtDetailsRoutingModule { }
