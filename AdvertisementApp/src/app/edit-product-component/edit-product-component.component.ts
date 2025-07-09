import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Advertisement } from '../model/advertisement';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvertisementServiceService } from '../service/advertisement-service.service';

@Component({
  selector: 'app-edit-product-component',
  imports: [FormsModule],
  templateUrl: './edit-product-component.component.html',
  styleUrl: './edit-product-component.component.css',
})
export class EditProductComponentComponent {

   @Input() advertisement: Advertisement = {title:'', name: '', category: '', description: ''};
   index: number = -1;

   constructor(private router: Router, private advertisementService: AdvertisementServiceService) {
   const nav = this.router.getCurrentNavigation();

   if(nav?.extras.state){
    this.index = nav.extras.state['index'];
    this.advertisement = { ...nav.extras.state['selectedAd']};
    console.log("edit :"+JSON.stringify(this.advertisement));
   }
   }

   updateAd() {
  if (this.index !== -1) {
    this.advertisementService.updateAdvertise(this.advertisement, this.index);
  }
  this.router.navigate(['/advertisement-form-component']);
}
  //  updateAd(){
  //   const updateAd = this.advertisement;
  //   const index = this.index;
  //   this.router.navigate(['/advertisement-form-component'], {state:{updateAd, index}})
  //  }

   cancelAd(){
        this.router.navigate(['/advertisement-form-component']);
   }
}
