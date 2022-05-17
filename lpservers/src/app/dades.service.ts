import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DadesService {
  urlServidor = "https://df668zl2u6.execute-api.eu-west-1.amazonaws.com/API"
  constructor(private http: HttpClient) { }

  llegirpacients(){
    return this.http.get<any>(
      this.urlServidor + '/pacients' 
    )
    }

    llegirhistorial(idpacient:any){
      return this.http.get<any>(
        this.urlServidor + '/historial/' + idpacient
      )
      }
}
