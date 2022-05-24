import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadesService } from '../dades.service';

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

    localStorage.setItem("token", (window.location.href).split('=')[1].split('&')[0])  

    this.serveiDades.llegirpacients().subscribe(resultat=>{
      this.pacients=resultat.Items;
      
  })

  }
  inserirdades(){
    this.serveiDades.inserir('{ "detalls": {"data": "'+this.data+'", "descripcio": "'+this.descripcio+'", "recepta": "'+this.recepta+'" }, "dolencia": "'+this.conclusio+'", "idmetgeD": "1ii3iv" }', this.id)
    .subscribe(resultat=>{
      alert("Inserit Correctament");
      this.ngOnInit()
      
}) 
  }
 
  inserirdadesN(){
    console.log("insert")
    // alert('{ "contacte": {"adreca": "'+this.adrecaN+'", "correu": "'+this.correuN+'","municipi": "'+this.municipiN+'", "telefon": "'+this.telefonN+'" }, "idmetge": "42", "info": { "cognoms": "'+this.cognomsN+'", "datanaix": "'+this.datanaixN+'", "DNI": "'+this.DNIN+'", "nom": "'+this.nomN+'", "sexe": "'+this.sexeN+'" } }');
    if(this.adrecaN && this.correuN && this.municipiN && this.telefonN && this.cognomsN && this.datanaixN && this.DNIN && this.nomN && this.sexeN && this.idN){
    this.serveiDades.inserirPacient('{ "contacte": {"adreca": "'+this.adrecaN+'", "correu": "'+this.correuN+'","municipi": "'+this.municipiN+'", "telefon": "'+this.telefonN+'" }, "idmetge": "42", "info": { "cognoms": "'+this.cognomsN+'", "datanaix": "'+this.datanaixN+'", "DNI": "'+this.DNIN+'", "nom": "'+this.nomN+'", "sexe": "'+this.sexeN+'" } }', this.idN)
    .subscribe(resultat=>{
      alert("Inserit Correctament");
      this.ngOnInit()
      
    }) 
    
    this.serveiDades.inserirPacientH('', this.idN)
        .subscribe(resultat=>{
          alert("historial inserit");
          this.ngOnInit()
          
    }) 
    this.serveiDades.inserirPacientD('', this.idN)
        .subscribe(resultat=>{
          alert("diagnostic inserit");
          this.ngOnInit()
          
}) 
  }
  
}
}
