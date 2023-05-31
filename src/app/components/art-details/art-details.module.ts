import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtDetailsRoutingModule } from './art-details-routing.module';
import { ArtDetailsComponent } from './art-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ArtDetailsComponent
  ],
  imports: [
    SharedModule,
    ArtDetailsRoutingModule
  ]
})
export class ArtDetailsModule { }
