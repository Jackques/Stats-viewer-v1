import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class DataService {

    constructor(
      private http: HttpClient
    ) {}


  //   private header = new HttpHeaders()
  //   .set('Content-Type', 'application/json')
  //   .set('Accept-Language', 'UTF-8')
  //   .set('Cache-Control', 'no-cache');

  //   private options = {
  //     headers: this.header,
  //     body: JSON.stringify(["d9ee4820-f160-436e-9e7d-6acebba3136e"]),
  // };

    public getProfiles() {
      return this.http.get('http://localhost:8080/api/v1/getProfileNamesFromProject/T-Helper');
    }

    public getFitnessData() {
      return this.http.get('http://localhost:8080/api/v1/getQuery/Fitness-stats/18b78e0b-a86c-4355-9810-43f0e2b64917/detailResults/d9ee4820-f160-436e-9e7d-6acebba3136e');
    }
  }