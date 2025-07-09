import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(advertisementlist: any[], searchText: string) {

    if (!searchText) {
      return advertisementlist;
    }
    searchText = searchText.toLowerCase();
    return advertisementlist.filter(ad => {
      return ad.title.toLowerCase().includes(searchText) ||
             ad.name.toLowerCase().includes(searchText);
    });
  }

}
