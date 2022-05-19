import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientsComponent } from './pacients/pacients.component';
import { HistorialComponent } from './historial/historial.component';
import { PrincipalComponent } from './principal/principal.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { LoginComponent } from './login/login.component';
import { EstudisComponent } from './estudis/estudis.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'principal', component: PrincipalComponent},
  { path: 'estudis', component: EstudisComponent},
  { path: 'pacients', component: PacientsComponent},
  { path: 'diagnostics/:idpacient', component: DiagnosticsComponent},
  { path: 'historial/:idpacient', component: HistorialComponent},
  { path: '**', redirectTo:'/login'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
