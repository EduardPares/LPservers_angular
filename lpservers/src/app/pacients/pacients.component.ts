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
  idmetge: any = "";
  constructor(public route: ActivatedRoute, public serveiDades: DadesService) { }

  ngOnInit(): void {
    this.idmetge = this.route.snapshot.paramMap.get("idmetge");
    this.serveiDades.llegirpacients(this.idmetge).subscribe(resultat=>{
      this.pacients=resultat.Items;
      
  })

  }

}
