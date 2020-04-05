import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PoliticasComponent } from './politicas/politicas.component';
import { CabeceraComponent } from './principal/cabecera/cabecera.component';


const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'politicas', component: PoliticasComponent },
];

@NgModule({
  declarations: [PrincipalComponent, PoliticasComponent, CabeceraComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  bootstrap: [PrincipalComponent],
  exports: [RouterModule]
})
export class LandingModule { }
