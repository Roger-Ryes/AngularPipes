import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [`
    a{ color: white}
  `]
})
export class NumerosComponent {

  urlDecimal: string = "https://angular.io/api/common/DecimalPipe";
  urlDecimalPipe: string = "https://angular.io/api/common/DecimalPipe";
  urlCurrency: string = "https://angular.io/api/common/CurrencyPipe";
  urlPercent: string = "https://angular.io/api/common/PercentPipe";

  ventasNetas: number = 2974543.1549;
  porcentaje: number = 0.6223;

  constructor() { }

}
