import { Basico } from '../../../payroll/payroll-components/basicos/basico-data';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicoService {

  private path = "http://localhost:8092/basico";

  constructor(private httpClient: HttpClient) { }

  getAllHuelgas(){
    let  header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':'82e2f0e5-30b2-4e6b-a7ce-99fa407d3b68', 
    'apiKey':'82e2f0e5-30b2-4e6b-a7ce-99fa407d3b68'});

    return this.httpClient.get<Basico[]>(this.path + "/getAllBasico", {headers: header});
  }

  save(basico:Basico){
    let  header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':'82e2f0e5-30b2-4e6b-a7ce-99fa407d3b68'});

    return this.httpClient.post(this.path + "/save", basico,
    {headers: header}).subscribe();
  }

  // hola(){
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':'Api-Key 82e2f0e5-30b2-4e6b-a7ce-99fa407d3b68' })
  //   };
  //   this.httpClient.get<string>(this.path, httpOptions).subscribe( data => {
  //     console.dir(data);
  //   });
  //   this.httpClient.post<string>(this.path, {}, httpOptions).subscribe(data => {
  //     console.dir(data);
  //   });
  // }

}
