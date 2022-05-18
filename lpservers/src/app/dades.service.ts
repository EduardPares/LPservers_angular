import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DadesService {
  urlServidor = "https://xtkyneixvg.execute-api.eu-west-1.amazonaws.com"
  constructor(private http: HttpClient) { }

  llegirpacients(idmetge:any){
    return this.http.get<any>(
      this.urlServidor + '/pacients/' + idmetge 
    )
    }

    llegirhistorial(idpacient:any){
      return this.http.get<any>(
        this.urlServidor + '/historial/' + idpacient
      )
      }
}
