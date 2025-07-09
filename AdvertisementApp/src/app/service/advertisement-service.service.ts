import { Injectable } from '@angular/core';
import { Advertisement } from '../model/advertisement';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementServiceService {

  constructor() { }

  // Sample advertisement data
 private advertisementList = [
{
      title: 'Sample Ad',
      name: 'John Doe',
      category: 'Electronics',
      description: 'This is a sample advertisement for electronics.'
    },
    {
      title: 'Sample Ad 2',
      name: 'Jane Smith',
      category: 'Furniture',
      description: 'This is a sample advertisement for furniture.'
    },
    {
      title: 'Sample Ad 3',
      name: 'Alice Johnson',
      category: 'Mobile',
      description: 'This is a sample advertisement for mobile.'
    }
  ];

  saveAdvertise(advertisement: Advertisement): Observable<Advertisement> {
     const newAd = { ...advertisement, id: this.advertisementList.length + 1 };
    this.advertisementList.push(newAd);
    return of(newAd);
  }

    getAllAdvertises(): Observable<Advertisement[]> {
      return of(this.advertisementList);
    }

  getAdvertise(title: string):Observable<Advertisement | undefined> {
    return of(this.advertisementList.find(ad => ad.title === title));
  }

  updateAdvertise(advertisement: Advertisement, index: number) {
    if (index >= 0 && index < this.advertisementList.length) {
      this.advertisementList[index] = { ...advertisement };
      return true;
    }
    return false;
  }

  deleteAdvertise(index: number) {
    if (index >= 0 && index < this.advertisementList.length) {
      this.advertisementList.splice(index, 1);
      return true;
    }
    return false;
  }
}
