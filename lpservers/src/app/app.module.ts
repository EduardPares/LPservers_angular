import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientsComponent } from './pacients/pacients.component';
import { HttpClientModule } from '@angular/common/http';
import { HistorialpacientsComponent } from './historialpacients/historialpacients.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientsComponent,
    HistorialpacientsComponent
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
