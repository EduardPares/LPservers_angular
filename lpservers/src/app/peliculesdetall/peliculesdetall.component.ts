import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadesService } from '../dades.service';

@Component({
  selector: 'app-peliculesdetall',
  templateUrl: './peliculesdetall.component.html',
  styleUrls: ['./peliculesdetall.component.css']
})
export class PeliculesdetallComponent implements OnInit {

  constructor(public route: ActivatedRoute, public serveiDades: DadesService) { }
  
  idpelicula:any = "";
  actors:any = "";
  ngOnInit(): void {
    this.idpelicula = this.route.snapshot.paramMap.get("id");
    this.serveiDades.llegirActors(this.idpelicula).subscribe(resultat=>{
      this.actors=resultat;
  })

}
}
