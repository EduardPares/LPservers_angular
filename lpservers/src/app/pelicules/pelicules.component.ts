import { Component, OnInit } from '@angular/core';
import { DadesService } from '../dades.service';

@Component({
  selector: 'app-pelicules',
  templateUrl: './pelicules.component.html',
  styleUrls: ['./pelicules.component.css']
})
export class PeliculesComponent implements OnInit {
  pelis:any = "";
  constructor(public serveiDades: DadesService) { }

  ngOnInit(): void {
    this.serveiDades.llegirPelis().subscribe(resultat=>{
      this.pelis=resultat;
  })

  }

}
