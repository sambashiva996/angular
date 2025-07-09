import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from '../model/equipment';
import { Gym } from '../model/gym';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private showData = new BehaviorSubject<any>(null);
  currentShowData = this.showData.asObservable();

  constructor(private http: HttpClient) { }

  getAllEquipment() {
    return this.http.get<Equipment[]>('http://localhost:8080/gym-equipment-service/api/equipments');
  }
    findByName(equipmentName: string) {
    console.log('Finding gyms by equipment name:', equipmentName);
    return this.http.get<Gym[]>(`http://localhost:8080/gym-equipment-service/api/equipment/${equipmentName}`);
  }
  showEquipment(equipment: Equipment) {
    console.log('Received data to equipment-service:', equipment);
    this.showData.next(equipment);
    console.log('Equipment data emitted:', this.showData.getValue());
  }
}
