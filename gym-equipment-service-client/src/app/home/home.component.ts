import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Member } from '../model/member';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
import { MemberService } from '../service/member.service';
import { NavComponent } from '../nav/nav.component';
import { Gym } from '../model/gym';
import { Equipment } from '../model/equipment';
import { GymService } from '../service/gym.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterModule, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  searchText: string = '';
  memberList: Member[] = [];
  memberId: string = '';
  gymList: Gym[] = [];
  equipmentList: Equipment[] = [];
  member: Member = { id: 0, name: '', phoneNumber: '', address: '' };
  equipmentName: string = '';
  equipGymList: Gym[] = [];


  constructor(private memberService: MemberService, private gymService: GymService) { }

  findByMemberId(){
    if (!this.memberId) {
       this.memberService.findAllMembers().subscribe((data: Member[]) => {
       this.memberList = data;
    });
    }

      const id = Number(this.memberId);
      this.memberService.findMemberById(id).subscribe((data: Member) => {
      console.log('Member fetched successfully:', data);
      this.member = data;
      this.memberList = [];
      this.memberList.push(data);
    });
  }
  ngOnInit() {
    this.memberService.findAllMembers().subscribe((data: Member[]) => {
      console.log('Members fetched successfully:', data);
      this.memberList = data;
    });
    this.gymService.getAllGyms().subscribe((data: Gym[]) => {
      console.log('Gyms fetched successfully:', data);
      this.gymList = data;
    });
    this.memberService.findAllEquipments().subscribe((data) => {
      console.log('Equipments fetched successfully:', data);
      this.equipmentList = data;
    });
  }
  findByName() {
        if (!this.equipmentName) {
       this.memberService.findAllEquipments().subscribe((data: Equipment[]) => {
       this.equipmentList = data;
    });
    }

      this.memberService.findByName(this.equipmentName).subscribe((data: Gym[]) => {
      console.log('Gym fetched successfully:', data);
      this.equipGymList = data;
    });
}
}
