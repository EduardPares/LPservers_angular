import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadesService } from '../dades.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  historial:any = "";
  idpacient:any = "";
  constructor(public route: ActivatedRoute, public serveiDades: DadesService) { }
  

 
  ngOnInit(): void {
    this.idpacient = this.route.snapshot.paramMap.get("idpacient");
    this.serveiDades.llegirhistorial(this.idpacient).subscribe(resultat=>{
      this.historial=resultat.Items;
  })

}

}
