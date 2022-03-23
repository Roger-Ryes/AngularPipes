# PipesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Links a usar
	https://www.primefaces.org/primeng/
	https://www.primefaces.org/primeflex/
	
	https://angular.io/api/common/DatePipe
	https://angular.io/api?query=pipe
	https://angular.io/cli
	
## Pipes
Importar: common

## Primeng
Los estilos se pega en angular.json, en "styles"

## Router
const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: "full"
  },
  {
    path: '**',
    redirectTo: ''
  }
];
 imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

En app.module
	Importar la clase del router

En archivo .html
	<router-outlet></router-outlet>

Basic Routing
https://angular.io/guide/router#defining-a-basic-route


## Cambiar idioma locale de la app
https://angular.io/guide/i18n-common-format-data-locale
 
Cambio de idioma de manera global
En app.module
	import { LOCALE_ID } from '@angular/core';
	import localeEs from "@angular/common/locales/es-EC";
	import { registerLocaleData } from "@angular/common";
	registerLocaleData( localeEs );
	
	
	providers: [
		{provide: LOCALE_ID, useValue: 'es-EC'}
	],
