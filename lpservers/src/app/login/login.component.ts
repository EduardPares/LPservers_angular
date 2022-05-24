import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadesService } from '../dades.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public servei:DadesService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.servei.token = this.route.snapshot.paramMap.get("token");
    // console.log(this.servei.token)
    localStorage.clear()
    
  }

}
