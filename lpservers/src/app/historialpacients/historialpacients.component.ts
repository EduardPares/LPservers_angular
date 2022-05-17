import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadesService } from '../dades.service';

@Component({
  selector: 'app-historialpacients',
  templateUrl: './historialpacients.component.html',
  styleUrls: ['./historialpacients.component.css']
})
export class HistorialpacientsComponent implements OnInit {

  historial:any = "";
  id:any = "";
  constructor(public route: ActivatedRoute, public serveiDades: DadesService) { }
  

 
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("idpacient");
    this.serveiDades.llegirhistorial(this.id).subscribe(resultat=>{
      this.historial=resultat.Items;
  })

}

}
