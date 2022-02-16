import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'; 
import { MatSort } from '@angular/material/sort';

import { CoingeckoApiService } from 'src/app/shared/services/coingecko-api.service';
import { ExchangeData } from 'src/app/shared/models/exchange-data.model';

@Component({
  selector: 'app-pages-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.scss']
})
export class ExchangesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'exchangeScore', 'volumeTwentyfourHours', 'avgLiquidity',
                                'weeklyVisits', 'markets', 'coins', 'fiatSupported', 'volumeSevenDays'];
  exchanges!: any[];
  dataSource!: MatTableDataSource<ExchangeData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private coinGeckoService: CoingeckoApiService,
    private titleService: Title
  ) {
    this.titleService.setTitle("Exchanges | Qryptic.net")

    this.coinGeckoService.getExchanges(25).subscribe(response => {
      Object.values(response).forEach(cryptocurrency => {
        let crypto = {
          id: '1',
          name: 'StakeCubeCoin',
          price: '30000',
          twentyfourHours: '300',
          sevenDays: '3000',
          marketCap: '3333333',
          volume: '3123123',
          circulatingSupply: '12312313',
          lastSevenDays: '123123'
        }
      })

      this.dataSource = new MatTableDataSource(Object.values(response));
    });
  }

  ngOnInit(): void {
      
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
