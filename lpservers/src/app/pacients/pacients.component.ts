import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadesService } from '../dades.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-pelicules',
  templateUrl: './pacients.component.html',
  styleUrls: ['./pacients.component.css']
})
export class PacientsComponent implements OnInit {
  pacients:any = "";
  cerca:any = "";
  data:any = "";
  descripcio:any="";
  recepta:any="";
  conclusio:any="";
  id:any="";

  adrecaN:any=""
  correuN:any=""
  municipiN:any=""
  telefonN:any=""
  cognomsN:any=""
  datanaixN:any=""
  DNIN:any=""
  nomN:any=""
  sexeN:any=""
  idN:any=""


  constructor(public route: ActivatedRoute, public serveiDades: DadesService) { }

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      localStorage.setItem("token", (window.location.href).split('=')[1].split('&')[0])  
    }
  

    this.serveiDades.llegirpacients().subscribe(resultat=>{
      this.pacients=resultat.Items;
      
  })

  }
  inserirdades(){
    this.serveiDades.token = localStorage.getItem("token")
    this.serveiDades.metge = jwt_decode(this.serveiDades.token)
    if(this.data && this.descripcio && this.recepta && this.conclusio && this.id){
    this.serveiDades.inserir('{ "detalls": {"data": "'+this.data+'", "descripcio": "'+this.descripcio+'", "recepta": "'+this.recepta+'" }, "dolencia": "'+this.conclusio+'", "idmetgeD": "'+this.serveiDades.metge["cognito:username"]+'" }', this.id)
    .subscribe(resultat=>{
      alert("Inserit Correctament");
      this.ngOnInit()
      
}) }
  }
 
  inserirdadesN(){
    this.serveiDades.token = localStorage.getItem("token")
    this.serveiDades.metge = jwt_decode(this.serveiDades.token)
    console.log(this.serveiDades.metge["cognito:username"])
    // alert('{ "contacte": {"adreca": "'+this.adrecaN+'", "correu": "'+this.correuN+'","municipi": "'+this.municipiN+'", "telefon": "'+this.telefonN+'" }, "idmetge": "42", "info": { "cognoms": "'+this.cognomsN+'", "datanaix": "'+this.datanaixN+'", "DNI": "'+this.DNIN+'", "nom": "'+this.nomN+'", "sexe": "'+this.sexeN+'" } }');
    if(this.adrecaN && this.correuN && this.municipiN && this.telefonN && this.cognomsN && this.datanaixN && this.DNIN && this.nomN && this.sexeN && this.idN){
    this.serveiDades.inserirPacient('{ "contacte": {"adreca": "'+this.adrecaN+'", "correu": "'+this.correuN+'","municipi": "'+this.municipiN+'", "telefon": "'+this.telefonN+'" }, "idmetge": "'+this.serveiDades.metge["cognito:username"]+'", "info": { "cognoms": "'+this.cognomsN+'", "datanaix": "'+this.datanaixN+'", "DNI": "'+this.DNIN+'", "nom": "'+this.nomN+'", "sexe": "'+this.sexeN+'" } }', this.idN)
    .subscribe(resultat=>{
      alert(this.nomN+" "+this.cognomsN+" ha estat inserit correctament a la base de dades de l'hospital.");
      this.ngOnInit()
      
    }) 
    
    this.serveiDades.inserirPacientH('', this.idN)
        .subscribe(resultat=>{
          this.ngOnInit()
          
    }) 
    this.serveiDades.inserirPacientD('', this.idN)
        .subscribe(resultat=>{
          this.ngOnInit()
          
}) 
  }
  
}
}
