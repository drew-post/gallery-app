import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListCardComponent } from '../components/list-card/list-card.component';

@NgModule({
    imports:      [ CommonModule, RouterModule ],
    declarations: [ ListCardComponent ],
    exports:      [ CommonModule, RouterModule,
      ListCardComponent ]
})
export class SharedModule { }
