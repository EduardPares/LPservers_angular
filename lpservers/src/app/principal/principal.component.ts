import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadesService } from '../dades.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  pacients:any = "";
  constructor(public route: ActivatedRoute, public serveiDades: DadesService) { }

  ngOnInit(): void {
    this.serveiDades.llegirpacients().subscribe(resultat=>{
      this.pacients=resultat.Items;
      
  })

  }


}
