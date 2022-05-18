import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientsComponent } from './pacients/pacients.component';
import { HistorialComponent } from './historial/historial.component';
import { PrincipalComponent } from './principal/principal.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';


const routes: Routes = [
  { path: 'principal', component: PrincipalComponent},
  { path: 'pacients', component: PacientsComponent},
  { path: 'diagnostics', component: DiagnosticsComponent},
  { path: 'historial/:idpacient', component: HistorialComponent},
  { path: '**', redirectTo:'/principal'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
