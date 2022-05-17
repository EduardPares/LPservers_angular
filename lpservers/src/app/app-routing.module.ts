import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientsComponent } from './pacients/pacients.component';
import { HistorialpacientsComponent } from './historialpacients/historialpacients.component';


const routes: Routes = [
  { path: 'pacients', component: PacientsComponent},
  { path: 'historialpacients/:idpacient', component: HistorialpacientsComponent},
  { path: '**', redirectTo:'/pacients'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
