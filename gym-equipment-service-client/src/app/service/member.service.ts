import { Injectable } from '@angular/core';
import { Member } from '../model/member';
import { HttpClient } from '@angular/common/http';
import { Gym } from '../model/gym';
import { Equipment } from '../model/equipment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  saveMember(member: Member) {
    console.log('Saving member:', JSON.stringify(member));
    return this.http.post<Member>('http://localhost:8080/gym-equipment-service/api/member', member);
  }
  findAllMembers() {
    return this.http.get<Member[]>('http://localhost:8080/gym-equipment-service/api/members');
  }
  findMemberById(id: number) {
    return this.http.get<Member>(`http://localhost:8080/gym-equipment-service/api/member/${id}`);
  }
    findAllEquipments() {
    return this.http.get<Equipment[]>('http://localhost:8080/gym-equipment-service/api/equipments');
  }
  deleteMemberById(id: number) {
    return this.http.delete(`http://localhost:8080/gym-equipment-service/api/member/${id}`);
  }
  updateMember(member: Member) {
    return this.http.put<Member>(`http://localhost:8080/gym-equipment-service/api/member/${member.id}`, member);
  }
  findByName(equipName: string) {
    console.log('Finding gyms by equipment name:', equipName);
    return this.http.get<Gym[]>(`http://localhost:8080/gym-equipment-service/api/equipment/${equipName}`);
  }
}
