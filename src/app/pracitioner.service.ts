import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class PracitionerService {
  static BASE_URL: string = "http://localhost:8080/api/patient"

  // Methode zum abfragen aller Practitioner
  public getAllPractitioners(){
    return this.http.get<Patient[]>(PracitionerService.BASE_URL+ "/");
  }

  public getPracitionerById(id: string){
    return this.http.get<Patient>(PracitionerService.BASE_URL+"/"+id);
  }

  constructor(private http: HttpClient) {

   }
}
