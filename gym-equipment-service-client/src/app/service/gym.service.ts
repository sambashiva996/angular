import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gym } from '../model/gym';

@Injectable({
  providedIn: 'root'
})
export class GymService {

  constructor(private http: HttpClient) { }

  getAllGyms() {
    return this.http.get<Gym[]>('http://localhost:8080/gym-equipment-service/api/gyms');
  }
}
