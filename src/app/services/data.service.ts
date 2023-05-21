import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class DataService {

    constructor(
      private http: HttpClient
    ) {}

    public getProfiles() {
      return this.http.get('http://localhost:8080/api/v1/getProfileNamesFromProject/T-Helper');
    }

    public getFitnessData() {
      return this.http.get('http://localhost:8080/api/v1/getQuery/Fitness-stats/18b78e0b-a86c-4355-9810-43f0e2b64917/detailResults/09fa41c7-8103-4ac3-9ca0-ed5b898b1914');
    }
  }