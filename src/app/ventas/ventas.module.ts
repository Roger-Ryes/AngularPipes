import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderlyComponent } from './pages/orderly/orderly.component';

import { OrdenarPipe } from './pipes/ordenar.pipe';
import { MayusculasPipe } from './pipes/mayuscula.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';


@NgModule({
  declarations: [
    NumerosComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderlyComponent,
    OrdenarPipe,
    MayusculasPipe,
    VuelaPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumerosComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderlyComponent
  ]
})
export class VentasModule { }
