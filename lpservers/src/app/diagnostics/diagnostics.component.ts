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
}



}
