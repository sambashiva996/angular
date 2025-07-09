import { Component, Input } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';
import { Gym } from '../model/gym';
import { GymService } from '../service/gym.service';

@Component({
  selector: 'app-gym',
  imports: [NavComponent,CommonModule],
  templateUrl: './gym.component.html',
  styleUrl: './gym.component.css'
})
export class GymComponent {

  @Input() gymList: Gym[] = [];

  constructor(private gymService: GymService) { }

  ngOnInit() {
    this.gymService.getAllGyms().subscribe((data: Gym[]) => {
      this.gymList = data;
    });
  }

}
