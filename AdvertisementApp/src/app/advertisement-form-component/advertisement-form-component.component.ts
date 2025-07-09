import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Advertisement } from '../model/advertisement';
import { AdvertisementTableComponentComponent } from '../advertisement-table-component/advertisement-table-component.component';
import { Router } from '@angular/router';
import { AdvertisementServiceService } from '../service/advertisement-service.service';

@Component({
  selector: 'app-advertisement-form-component',
  imports: [FormsModule, CommonModule, AdvertisementTableComponentComponent],
  templateUrl: './advertisement-form-component.component.html',
  styleUrl: './advertisement-form-component.component.css'
})
export class AdvertisementFormComponentComponent {

  category: string[] = ['Furniture','Hardware', 'Mobile'];
  advertisement: Advertisement = {title: '', name: '', category: '', description: ''};
  advertisementList: Advertisement[] = [];
  editingIndex: number = -1;
  editingAd: Advertisement = {title: '', name: '', category: '', description: ''};
  // searchText: string = '';
seachText: any;

  constructor(private router: Router, private advertisementService: AdvertisementServiceService) {
}

  submitAdvertisement(){
   this.advertisementService.saveAdvertise(this.advertisement);
    this.advertisement = {title: '', name: '', category: '', description: ''};
    this.editingIndex = -1;
  }

  deleteAd(index: number){
    this.advertisementService.deleteAdvertise(index);
  }

  onEditAd(event: {ad: Advertisement, index: number}) {
    this.editingAd = event.ad;
    this.editingIndex = event.index;
    this.advertisement = { ...this.editingAd };
    console.log("Form component : "+ JSON.stringify(this.advertisementList));
    this.router.navigate(['/edit-product-component'], {state: {index: this.editingIndex, selectedAd: this.advertisement}});
  }
}

