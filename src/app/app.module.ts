import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './modulos/raiz/raiz.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingModule } from './modulos/landing/principal.module';
import { HammerGestureY } from './servicios/hammer/HammerGestureY';


@NgModule({
  declarations: [RootComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    LandingModule,
    BrowserAnimationsModule,
    HammerModule
  ],
  bootstrap: [RootComponent],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureY }
  ]
})
export class AppModule { }
