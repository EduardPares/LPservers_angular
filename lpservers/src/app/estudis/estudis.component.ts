import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadesService } from '../dades.service';

@Component({
  selector: 'app-estudis',
  templateUrl: './estudis.component.html',
  styleUrls: ['./estudis.component.css']
})
export class EstudisComponent implements OnInit {
  encriptades:any=""
  idpacientE:any=""
  pacientE:any=""
  constructor(public route: ActivatedRoute, public serveiDades: DadesService) { }

  ngOnInit(): void {
    this.serveiDades.llegirdades().subscribe(resultat=>{
      this.encriptades=resultat.data;
    })
    this.serveiDades.llegirpacientE(this.idpacientE).subscribe(resultat=>{
      this.pacientE=resultat.data;
})
}
}

