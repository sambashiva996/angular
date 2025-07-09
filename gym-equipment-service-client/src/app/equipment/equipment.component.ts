import { Component, Output } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { Equipment } from '../model/equipment';
import { CommonModule } from '@angular/common';
import { EquipmentService } from '../service/equipment.service';
import { MemberService } from '../service/member.service';
import { Gym } from '../model/gym';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Router } from 'express';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-equipment',
  imports: [NavComponent, NavComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent {
  equipmentList: Equipment[] = [];
  equipmentName: string = '';
  equipGymList: Gym[] = [];
  equipment: Equipment = { id: 0, equipName: '', equipDescription: '' };
  @Output() showData = new EventEmitter<Equipment>();

  constructor(private equipmentService: EquipmentService, private memberService: MemberService) {}

  ngOnInit() {
    this.equipmentService.getAllEquipment().subscribe((data: Equipment[]) => {
      this.equipmentList = data;
    });
}
  findByName() {
      if (!this.equipmentName) {
       this.memberService.findAllEquipments().subscribe((data: Equipment[]) => {
       this.equipmentList = data;
             this.equipGymList = [];
    });
    }

      this.equipmentService.findByName(this.equipmentName).subscribe((data: Gym[]) => {
      console.log('Gym fetched successfully:', data);
      this.equipGymList = data;
    });
}
  showEquipment(equipment: Equipment) {
  this.equipment = { ...equipment };
  console.log('Received equipment data:', this.equipment);
  // this.showData.emit(this.equipment);
  this.equipmentService.showEquipment(this.equipment);
}
}
