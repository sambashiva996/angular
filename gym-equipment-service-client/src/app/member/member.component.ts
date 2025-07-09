import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MemberService } from '../service/member.service';
import { Member } from '../model/member';
import { Gym } from '../model/gym';
import { Equipment } from '../model/equipment';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [FormsModule, CommonModule, NavComponent],
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {

  member: Member = {name: '', phoneNumber: '', address: ''};
  gym: Gym = {exercises: '', gymAddress: '', equipName: []};
  equipment: Equipment = {equipName: '', equipDescription: ''};
  response: any;
  equipmentList: Equipment[] = [{equipName: '', equipDescription: ''}];
  memberList: Member[] = [];
  memberId: string = '';

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.memberService.findAllMembers().subscribe((data: Member[]) => {
      console.log('Members fetched successfully:', data);
      this.memberList = data;
    });
  }

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
