import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[], ...sortBy: string[]): Heroe[] {
    // return value.sort;
    switch(sortBy[0]){
      case 'name':
        value = value.sort(function (a, b) { return (a.name > b.name) ? 1 : -1; });
      break;
      case 'fly':
        value = value.sort((a, b) => { return (a.fly < b.fly) ? 1 : -1; });
        break;
      case 'color':
        value = value.sort((a, b) => { return (a.color > b.color) ? 1 : -1; });
      break;          
    }
    return value;
  }

}
