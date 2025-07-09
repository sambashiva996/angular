import { Component } from '@angular/core';
import { Equipment } from '../model/equipment';
import { NavComponent } from "../nav/nav.component";
import { FormsModule } from '@angular/forms';
import { EquipmentService } from '../service/equipment.service';

@Component({
  selector: 'app-show-equipment',
  imports: [NavComponent, FormsModule],
  templateUrl: './show-equipment.component.html',
  styleUrl: './show-equipment.component.css'
})
export class ShowEquipmentComponent {

  equipment: any = {id: '', equipName: '', equipDescription: ''};

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
    console.log('ShowEquipmentComponent initialized');
    this.equipmentService.currentShowData.subscribe(data => {
      console.log('Received data from equipment service:', data);
      this.equipment = data
      console.log('Received show equipment data:', this.equipment);

    });
  }
}
