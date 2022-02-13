import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'; 
import { MatSort } from '@angular/material/sort';

import { CryptoCurrencyData } from 'src/app/shared/models/crypto-currency-data.model';

@Component({
  selector: 'app-pages-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.scss']
})
export class CryptocurrenciesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'twentyfourHours', 'sevenDays',
                                'marketCap', 'volume', 'circulatingSupply', 'lastSevenDays'];
  dataSource: MatTableDataSource<CryptoCurrencyData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private titleService: Title) {
    this.titleService.setTitle("Cryptocurrencies | Qryptic.net")

    // Create 100 users
    const users:any = [
      {
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
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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
