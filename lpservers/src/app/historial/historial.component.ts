import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadesService } from '../dades.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  historial:any="";
  idpacient:any = "";
  pacients:any="";
  idpacientn:any="";
  nom:any="";
  boto:any=""
  idpacientb:any=""
  constructor(public route: ActivatedRoute, public serveiDades: DadesService) { }


 
  ngOnInit(): void {
    this.idpacient = this.route.snapshot.paramMap.get("idpacient");
    this.serveiDades.llegirhistorial(this.idpacient).subscribe(resultat=>{
      this.historial=resultat;
  })
  this.serveiDades.llegirpacients().subscribe(resultat=>{
    this.pacients=resultat.Items;

  })
  this.route.params.subscribe(
    params => {
      this.idpacientb = this.route.snapshot.paramMap.get("idpacient");
        this.serveiDades.botopacient(this.idpacientb).subscribe(resultat=>{
          this.boto=resultat.Items;
}) 
    }

 
  )
  this.idpacientn = this.route.snapshot.paramMap.get("idpacient");
  this.serveiDades.botopacient(this.idpacientn).subscribe(resultat=>{
    this.nom=resultat.Items;
})
}}
