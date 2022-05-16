import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculesComponent } from './pelicules/pelicules.component';


const routes: Routes = [
  { path: '', pathMatch:'full',redirectTo: '/pelicules'},
  { path: 'pelicules', component: PeliculesComponent},
  { path: '**', redirectTo:'/pelicules'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
