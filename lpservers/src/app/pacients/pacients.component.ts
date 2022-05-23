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
  constructor(public route: ActivatedRoute, public serveiDades: DadesService) { }

  ngOnInit(): void {
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
  
}
