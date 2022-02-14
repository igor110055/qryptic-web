import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { CryptocurrenciesComponent } from './pages/cryptocurrencies/cryptocurrencies.component';
import { ExchangesComponent } from './pages/exchanges/exchanges.component';
import { WalletsComponent } from './pages/wallets/wallets.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CommunityRulesComponent } from './pages/community-rules/community-rules.component';
import { FaqComponent } from './pages/faq/faq.component';
import { QrypticApiComponent } from './pages/qryptic-api/qryptic-api.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cryptocurrencies', component: CryptocurrenciesComponent },
  { path: 'exchanges', component: ExchangesComponent },
  { path: 'wallets', component: WalletsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'community-rules', component: CommunityRulesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'qryptic-api', component: QrypticApiComponent },
  { path: 'terms-of-use', component: TermsOfUseComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
