import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Modulos personalizado
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar idioma locale de la app
import { LOCALE_ID } from '@angular/core';
import localeEs from "@angular/common/locales/es-EC";
import localeFr from "@angular/common/locales/fr-BE";
import { registerLocaleData } from "@angular/common";
registerLocaleData( localeEs );
registerLocaleData( localeFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-EC'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {  }
