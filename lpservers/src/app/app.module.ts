import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientsComponent } from './pacients/pacients.component';
import { HttpClientModule } from '@angular/common/http';
import { HistorialComponent } from './historial/historial.component';
import { PrincipalComponent } from './principal/principal.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientsComponent,
    HistorialComponent,
    PrincipalComponent,
    DiagnosticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
