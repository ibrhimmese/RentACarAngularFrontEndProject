import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/services/car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform( value: Car[], filterText: string ): Car[] {
    filterText = filterText? filterText.toLocaleLowerCase():""
    return filterText
    ? value.filter(
        (c: Car) =>
          `${c.brandName} ${c.description}`
            .toLocaleLowerCase()
            .includes(filterText)
      )
    : value;
  }
  
}
