import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class DadesService {
  token:any=""
  metge:any=""
  
  urlServidor = "https://xtkyneixvg.execute-api.eu-west-1.amazonaws.com"
  urlServidorE = "http://ec2-3-250-125-124.eu-west-1.compute.amazonaws.com:3000"
  constructor(private http: HttpClient) { }
 
  llegirpacients() {
    this.token = localStorage.getItem("token")
    this.metge = jwt_decode(this.token)
    console.log(this.metge["cognito:username"])
    const headers = { 'Authorization': `Bearer ${this.token}` }
    return this.http.get<any>(
      this.urlServidor + '/pacients/'+ this.metge["cognito:username"], {headers}
    )
  }

  llegirhistorial(idpacient: any) {
    this.token = localStorage.getItem("token")
    
    const headers = { 'Authorization': `Bearer ${this.token}` }
    return this.http.get<any>(
      this.urlServidor + '/historial/' + idpacient, {headers}
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
    this.token = localStorage.getItem("token")
    
    const headers = { 'Authorization': `Bearer ${this.token}` }
    return this.http.get<any>(
      this.urlServidor + '/unpacient/' + idpacientb, {headers}
    )
  }
  nompacient(idpacientn: any) {
    this.token = localStorage.getItem("token")
    
    const headers = { 'Authorization': `Bearer ${this.token}` }
    return this.http.get<any>(
      this.urlServidor + '/historial/' + idpacientn, {headers}
    )
  }
  inserir(descripcio: any, idpacient: any) {
    this.token = localStorage.getItem("token")
    
    const headers = { 'Authorization': `Bearer ${this.token}` }
    return this.http.put<any>(this.urlServidor + '/diagnostics/' + idpacient, descripcio, {headers})

  }
  inserirextern(descripcio: any, id: any) {
    this.token = localStorage.getItem("token")
    
    const headers = { 'Authorization': `Bearer ${this.token}` }
    return this.http.put<any>(this.urlServidor + '/diagnostics/' + id, descripcio, {headers})

  }
  inserirPacient(descripcio: any, id: any) {
    this.token = localStorage.getItem("token")
    
    const headers = { 'Authorization': `Bearer ${this.token}` }
    return this.http.post<any>(this.urlServidor + '/pacients/' + id, descripcio,  {headers})

  }
  inserirPacientH(descripcio: any, id: any) {
    this.token = localStorage.getItem("token")
    
    const headers = { 'Authorization': `Bearer ${this.token}` }
    return this.http.post<any>(this.urlServidor + '/historial/' + id, descripcio,  {headers})

  }
  inserirPacientD(descripcio: any, id: any) {
    this.token = localStorage.getItem("token")
    
    const headers = { 'Authorization': `Bearer ${this.token}` }
    return this.http.post<any>(this.urlServidor + '/diagnostics/' + id, descripcio,  {headers})

  }
  inserirHistorial(descripcio: any, id: any) {
    this.token = localStorage.getItem("token")
    
    const headers = { 'Authorization': `Bearer ${this.token}` }
    return this.http.put<any>(this.urlServidor + '/historial/' + id, descripcio,  {headers})
  }
  llegirdades() {
    this.token = localStorage.getItem("token")
    
    const headers = { 'Authorization': `Bearer ${this.token}` }
    return this.http.get<any>(
      this.urlServidorE + '/historial',  {headers}
    )
  }
  llegirpacientE(idpacientE: any) {
    this.token = localStorage.getItem("token")
    
    const headers = { 'Authorization': `Bearer ${this.token}` }
    return this.http.get<any>(
      this.urlServidorE + '/pacients/' + idpacientE,  {headers} 
    )
  }
} 
