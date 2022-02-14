import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'; 
import { MatSort } from '@angular/material/sort';

import { ExchangeData } from 'src/app/shared/models/exchange-data.model';

@Component({
  selector: 'app-pages-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.scss']
})
export class ExchangesComponent implements OnInit {
displayedColumns: string[] = ['id', 'name', 'exchangeScore', 'volumeTwentyfourHours', 'avgLiquidity',
                                'weeklyVisits', 'markets', 'coins', 'fiatSupported', 'volumeSevenDays'];
  dataSource: MatTableDataSource<ExchangeData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private titleService: Title) {
    this.titleService.setTitle("Exchanges | Qryptic.net")

    const exchanges:any = [
      {
        id: '1',
        name: 'StakeCube',
        exchangeScore: '1',
        volumeTwentyfourHours: '1',
        avgLiquidity: '1',
        weeklyVisits: '1',
        markets: '1',
        coins: '1',
        fiatSupported: '1',
        volumeSevenDays: '1'
      }
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(exchanges);
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
