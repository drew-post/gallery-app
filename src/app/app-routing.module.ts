import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./components/art-details/art-details.module').then(m => m.ArtDetailsModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
