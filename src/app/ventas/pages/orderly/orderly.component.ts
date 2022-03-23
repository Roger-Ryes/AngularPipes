import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-orderly',
  templateUrl: './orderly.component.html',
  styles: [
  ]
})
export class OrderlyComponent {

  value: string = "Test";
  typeCase: boolean = true;

  // TABLA
  sortBy: string = "nombre";
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.azul},
    {
      name: 'Batman',
      fly: false,
      color: Color.negro},
    {
      name: 'Linterna Verda',
      fly: true,
      color: Color.verde},
    {
      name: 'Daredevil',
      fly: false,
      color: Color.rojo},

  ]

  changeCase(){
    this.typeCase = !this.typeCase;
    console.log(this.typeCase);
  }

  changeSortBy( value: string){
    this.sortBy = value;
  }
}
