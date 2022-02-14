import { Component, OnInit } from '@angular/core';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pages-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit {
  faArrowCircleRight = faArrowCircleRight;
  breakpoint!: number;
  rowHeight!: string;

  constructor(private titleService: Title) { 
    this.titleService.setTitle("Wallets | Qryptic.net")
    this.breakpoint = this.getBreakPoint();
    this.rowHeight = this.getRowHeight();
  }

  ngOnInit(): void {
  }

  onResize(event:any) {
    if (event.target.innerWidth < 650) {
      this.breakpoint = 1;
      this.rowHeight = "4:3";
    } else if (event.target.innerWidth < 1200) {
      this.breakpoint = 1;
      this.rowHeight = "4:1.5";
    } else if (event.target.innerWidth > 1200) {
      this.breakpoint = 2;
      this.rowHeight = "4:2";
    }
  }

  getBreakPoint(): number {
    var width: number = window.innerWidth;

    if (width > 1200) {
      return 2;
    } else if (width < 650) {
      return 1;
    } else {
      return 1;
    }
  }

  getRowHeight(): string {
    var width: number = window.innerWidth;

    if (width > 1200) {
      return "4:2";
    } else if (width < 1200) {
      return "4:3";
    } else {
      return "4:4";
    }
  }
}
