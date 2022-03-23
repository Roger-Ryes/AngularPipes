import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './ventas/pages/basics/basics.component';
import { NoCommonsComponent } from './ventas/pages/no-commons/no-commons.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrderlyComponent } from './ventas/pages/orderly/orderly.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: "full"
  },
  {
    path: "numero",
    component: NumerosComponent
  },
  {
    path: "no-comunes",
    component: NoCommonsComponent
  },
  {
    path: "ordenar",
    component: OrderlyComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
