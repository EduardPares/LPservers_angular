import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DadesService {
  urlServidor = "https://www.firaempresa.cat/apipelis"
  constructor(private http: HttpClient) { }

  llegirPelis(){
    return this.http.get<any>(
      this.urlServidor + '/pelicules'
    )
    }
    llegirActors(id:any){
      return this.http.get<any>(
        this.urlServidor + '/actors/' + id
      )
      }
}
