import { Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { HomeComponent } from './home/home.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { GymComponent } from './gym/gym.component';
import { GymEquipmentServiceComponent } from './gym-equipment-service/gym-equipment-service.component';
import { ShowEquipmentComponent } from './show-equipment/show-equipment.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full', title: 'Gym Equipment Service'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'member', component: MemberComponent, title: 'Member'},
    {path: 'equipment', component: EquipmentComponent, title: 'Equipment'},
    {path: 'gym', component: GymComponent, title: 'Gym'},
    {path: 'gym-equipment-service', component: GymEquipmentServiceComponent, title: 'Gym Equipment Service'},
    {path: 'show-equipment', component: ShowEquipmentComponent, title: 'Show Equipment'}
];
