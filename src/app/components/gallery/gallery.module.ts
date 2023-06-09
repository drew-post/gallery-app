import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    GalleryRoutingModule,
    SharedModule
  ],
  providers: []
})
export class GalleryModule { }
