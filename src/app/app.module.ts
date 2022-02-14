import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './core/header/header.component';
import { BannerComponent } from './pages/index/banner/banner.component';
import { PagesComponent } from './pages/pages.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './core/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CryptocurrenciesComponent } from './pages/cryptocurrencies/cryptocurrencies.component';
import { ExchangesComponent } from './pages/exchanges/exchanges.component';
import { WalletsComponent } from './pages/wallets/wallets.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { CommunityRulesComponent } from './pages/community-rules/community-rules.component';
import { CareersComponent } from './pages/careers/careers.component';
import { QrypticApiComponent } from './pages/qryptic-api/qryptic-api.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HeaderComponent,
    BannerComponent,
    PagesComponent,
    IndexComponent,
    AboutComponent,
    FooterComponent,
    CryptocurrenciesComponent,
    ExchangesComponent,
    WalletsComponent,
    TermsOfUseComponent,
    CommunityRulesComponent,
    CareersComponent,
    QrypticApiComponent,
    FaqComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
