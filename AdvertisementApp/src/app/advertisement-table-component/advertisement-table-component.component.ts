import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Advertisement } from '../model/advertisement';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "../pipes/search.pipe";
import { AdvertisementServiceService } from '../service/advertisement-service.service';

@Component({
  selector: 'app-advertisement-table-component',
  imports: [CommonModule, RouterModule, FormsModule, SearchPipe],
  templateUrl: './advertisement-table-component.component.html',
  styleUrl: './advertisement-table-component.component.css'
})
export class AdvertisementTableComponentComponent {

  @Input() advertisementList: Advertisement[] = [];
           advertisement: Advertisement = {title:'', name: '', category: '', description: ''};

  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<{ad: Advertisement, index: number}>();

  searchText: string = '';

  constructor(private router: Router, private advertisementService: AdvertisementServiceService) {
    // this.getFiltredAds();
  }

  ngOnInit() {
    this.advertisementService.getAllAdvertises().subscribe(advertisementList => {
    this.advertisementList = advertisementList;
    });
  }

   deleteAd(index: number) {
    this.delete.emit(index);
  }

  getFilteredAds(): Advertisement[]{
    // if(!this.searchText.trim()) return this.advertisementList;

    // const loweSearchText = this.searchText.toLowerCase();
    return this.advertisementList;
    // .filter(ads => ads.title.includes(loweSearchText) || ads.name.includes(loweSearchText));
  }

  editAd(index: number){
    const selectedAd = {...this.advertisementList[index]};
    console.log("index :"+index+"\ntable ad "+ JSON.stringify(selectedAd));
    this.edit.emit({ad: selectedAd, index});
    // this.router.navigate(['/edit-product-component'], {state: {index, selectedAd}});
  }
}
