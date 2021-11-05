import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { HomeOfficeComponent } from './views/home-office/home-office.component';
import { HomeComponent } from './views/home/home.component';
import { MonteSeuPcComponent } from './views/monte-seu-pc/monte-seu-pc.component';
import { PcGamerComponent } from './views/pc-gamer/pc-gamer.component';
import { PerifericosComponent } from './views/perifericos/perifericos.component';
import { SmartphonesComponent } from './views/smartphones/smartphones.component';

const routes: Routes = [
  { path: '' , component: HomeComponent } ,       
  { path: 'meu-carrinho' , component: CarrinhoComponent } ,
  { path: 'monte-seu-pc' , component: MonteSeuPcComponent } ,
  { path: 'home-office' , component: HomeOfficeComponent } ,
  { path: 'pc-gamer' , component: PcGamerComponent } ,
  { path: 'perifericos' , component: PerifericosComponent } ,
  { path: 'smartphones' , component: SmartphonesComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
