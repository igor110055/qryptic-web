import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { CryptocurrenciesComponent } from './pages/cryptocurrencies/cryptocurrencies.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cryptocurrencies', component: CryptocurrenciesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
