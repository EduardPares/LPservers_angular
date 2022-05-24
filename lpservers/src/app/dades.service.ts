import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DadesService {
  token:any=""
  
  urlServidor = "https://xtkyneixvg.execute-api.eu-west-1.amazonaws.com"
  urlServidorE = "http://ec2-3-250-125-124.eu-west-1.compute.amazonaws.com:3000"
  constructor(private http: HttpClient) { }
 
  llegirpacients() {
    this.token = localStorage.getItem("token")
    const headers = { 'Authorization': `Bearer ${this.token}` }
    return this.http.get<any>(
      this.urlServidor + '/pacients/42', {headers}
    )
  }

  llegirhistorial(idpacient: any) {
    return this.http.get<any>(
      this.urlServidor + '/historial/' + idpacient
    )
  }
  llegirdiagnostic(idpacient: any) {
    this.token = localStorage.getItem("token")
    
    const headers = { 'Authorization': `Bearer ${this.token}` }
    return this.http.get<any>(
      this.urlServidor + '/diagnostics/' + idpacient, {headers}
    )
  }
  botopacient(idpacientb: any) {
    return this.http.get<any>(
      this.urlServidor + '/unpacient/' + idpacientb
    )
  }
  nompacient(idpacientn: any) {
    return this.http.get<any>(
      this.urlServidor + '/historial/' + idpacientn
    )
  }
  inserir(descripcio: any, idpacient: any) {
    return this.http.put<any>(this.urlServidor + '/diagnostics/' + idpacient, descripcio)

  }
  inserirextern(descripcio: any, id: any) {
    return this.http.put<any>(this.urlServidor + '/diagnostics/' + id, descripcio)

  }
  inserirPacient(descripcio: any, id: any) {
    return this.http.post<any>(this.urlServidor + '/pacients/' + id, descripcio)

  }
  inserirPacientH(descripcio: any, id: any) {
    return this.http.post<any>(this.urlServidor + '/historial/' + id, descripcio)

  }
  inserirPacientD(descripcio: any, id: any) {
    return this.http.post<any>(this.urlServidor + '/diagnostics/' + id, descripcio)

  }
  inserirHistorial(descripcio: any, id: any) {
    return this.http.put<any>(this.urlServidor + '/historial/' + id, descripcio)
  }
  llegirdades() {
    return this.http.get<any>(
      this.urlServidorE + '/historial' 
    )
  }
  llegirpacientE(idpacientE: any) {
    return this.http.get<any>(
      this.urlServidorE + '/pacients/' + idpacientE 
    )
  }
} 
