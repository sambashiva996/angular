import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { MemberService } from '../service/member.service';
import { Gym } from '../model/gym';
import { Equipment } from '../model/equipment';
import { Member } from '../model/member';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gym-equipment-service',
  imports: [CommonModule, NavComponent, FormsModule],
  templateUrl: './gym-equipment-service.component.html',
  styleUrl: './gym-equipment-service.component.css'
})
export class GymEquipmentServiceComponent {
  member: Member = {name: '', phoneNumber: '', address: ''};
    gym: Gym = {exercises: '', gymAddress: '', equipName: []};
    equipment: Equipment = {equipName: '', equipDescription: ''};
    response: any;
    equipmentList: Equipment[] = [{equipName: '', equipDescription: ''}];
    memberList: Member[] = [];
    memberId: string = '';
  
    constructor(private memberService: MemberService) {}
  
    saveMember(){
      this.gym.equipName = this.equipmentList;
      this.member.gym = this.gym;
      this.memberService.saveMember(this.member).subscribe((data) => {
        this.response = data.id ? 'Member saved successfully with ID: ' + data.id : 'Failed to save member';
     });
     this.member = {id: 0, name: '', phoneNumber: '', address: ''};
     this.gym = {id: 0, exercises: '', gymAddress: ''};
     this.equipment = {id: 0, equipName: '', equipDescription: ''};
    }
  
    removeEquipment(index: number) {
      if (index > -1) {
        this.equipmentList.splice(index, 1);
      }
    }
  
    addEquipment() {
      this.equipmentList.push({ equipName: '', equipDescription: '' });
    }
  
    findByMemberId() {
    if (!this.memberId) {
      this.memberService.findAllMembers().subscribe((data: Member[]) => {
        this.memberList = data;
      });
    }
      this.memberService.findMemberById(Number(this.memberId)).subscribe((data: Member) => {
        console.log('Member fetched successfully:', data);
        this.member = data;
        this.memberList = [];
        this.memberList.push(data);
      });
   }

}
