import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DadesService {
  urlServidor = "https://xtkyneixvg.execute-api.eu-west-1.amazonaws.com"
  constructor(private http: HttpClient) { }
  // ec2-3-250-125-124.eu-west-1.compute.amazonaws.com
  llegirpacients() {
    return this.http.get<any>(
      this.urlServidor + '/pacients/42'
    )
  }

  llegirhistorial(idpacient: any) {
    return this.http.get<any>(
      this.urlServidor + '/historial/' + idpacient
    )
  }
  llegirdiagnostic(idpacient: any) {
    return this.http.get<any>(
      this.urlServidor + '/diagnostics/' + idpacient
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
    this.http.put<any>(this.urlServidor + '/diagnostics/' + idpacient, descripcio)

  }
}
