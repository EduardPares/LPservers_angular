import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadesService } from '../dades.service';

@Component({
  selector: 'app-diagnostics',
  templateUrl: './diagnostics.component.html',
  styleUrls: ['./diagnostics.component.css']
})
export class DiagnosticsComponent implements OnInit {
  pacients:any=""
  diagnostic:any=""
  idpacient:any=""
  idpacientb:any=""
  boto:any=""
  body:any=""

  data:any=""
  descripcio:any=""
  recepta:any=""
  conclusio:any=""

  inserirH:any=""

  constructor(public route: ActivatedRoute, public serveiDades: DadesService) { }

  ngOnInit(): void {
    this.serveiDades.llegirpacients().subscribe(resultat=>{
      this.pacients=resultat.Items;
    })
    this.route.params.subscribe(
      params => {
        this.idpacient = this.route.snapshot.paramMap.get("idpacient");
        this.serveiDades.llegirdiagnostic(this.idpacient).subscribe(resultat=>{
          this.diagnostic=resultat.Items;
      }
    )   
  })

  this.route.params.subscribe(
    params => {
      this.idpacientb = this.route.snapshot.paramMap.get("idpacient");
        this.serveiDades.botopacient(this.idpacientb).subscribe(resultat=>{
          this.boto=resultat.Items;
}) 
    }

 
  )}
  inserirdades(){
    console.log("inserir")
    this.serveiDades.inserir('{ "detalls": {"data": "'+this.data+'", "descripcio": "'+this.descripcio+'", "recepta": "'+this.recepta+'" }, "dolencia": "'+this.conclusio+'", "idmetgeD": "1ii3iv" }', this.idpacient)
    .subscribe(resultat=>{
      alert("Diagnostic del pacient "+this.idpacient+" inserit correctament")
      if(this.inserirH){
        this.serveiDades.inserirHistorial('{"dolencia": "'+this.conclusio+'", "deteccio": "'+this.data+'", "idmetgeD": "42", "sintomes": [ "'+this.descripcio+'" ], "tractament": "'+this.recepta+'" }', this.idpacient)
        .subscribe(resultat=>{
        alert("Inserit correctament a historial")
        this.ngOnInit()
      }) 
      }
      this.ngOnInit()
}) 
  }
  

 


 
}

