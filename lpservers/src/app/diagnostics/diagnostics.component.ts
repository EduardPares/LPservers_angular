import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadesService } from '../dades.service';
import jwt_decode from 'jwt-decode';

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
    this.serveiDades.token = localStorage.getItem("token")
    this.serveiDades.metge = jwt_decode(this.serveiDades.token)
    if(this.data && this.descripcio && this.recepta && this.conclusio && this.idpacient){
      console.log("inserir")
      this.serveiDades.inserir('{ "detalls": {"data": "'+this.data+'", "descripcio": "'+this.descripcio+'", "recepta": "'+this.recepta+'" }, "dolencia": "'+this.conclusio+'", "idmetgeD": "'+this.serveiDades.metge["cognito:username"]+'" }', this.idpacient)
      .subscribe(resultat=>{
        alert("Diagnostic del pacient "+this.idpacient+" inserit correctament")
        if(this.inserirH){
          this.serveiDades.inserirHistorial('{"dolencia": "'+this.conclusio+'", "deteccio": "'+this.data+'", "idmetgeD": "'+this.serveiDades.metge["cognito:username"]+'", "sintomes": [ "'+this.descripcio+'" ], "tractament": "'+this.recepta+'" }', this.idpacient)
          .subscribe(resultat=>{
          alert("Inserit correctament a historial")
          this.ngOnInit()
        }) 
        }
        this.ngOnInit()
  }) 
    }
  }
  

 


 
}

