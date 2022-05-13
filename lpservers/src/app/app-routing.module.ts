import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculesComponent } from './pelicules/pelicules.component';
import { PeliculesdetallComponent } from './peliculesdetall/peliculesdetall.component';

const routes: Routes = [
  { path: '', pathMatch:'full',redirectTo: '/pelicules'},
  { path: 'pelicules', component: PeliculesComponent},
  { path: 'peliculesdetall/:id', component: PeliculesdetallComponent},
  { path: '**', redirectTo:'/pelicules'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
