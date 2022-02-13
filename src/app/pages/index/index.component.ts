import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pages-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;
  breakpoint!: number;
  rowHeight!: string;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Qryptic.net - Accelerating crypto for the world")
    this.breakpoint = this.getBreakPoint();
    this.rowHeight = this.getRowHeight();
  }

  onResize(event:any) {
    if (event.target.innerWidth < 650) {
      this.breakpoint = 1;
      this.rowHeight = "4:1.5";
    } else if (event.target.innerWidth < 1200) {
      this.breakpoint = 2;
      this.rowHeight = "4:1.5";
    } else if (event.target.innerWidth > 1200) {
      this.breakpoint = 4;
      this.rowHeight = "4:2";
    }
  }

  getBreakPoint(): number {
    var width: number = window.innerWidth;

    if (width > 1200) {
      return 4;
    } else if (width < 650) {
      return 1;
    } else {
      return 2;
    }
  }

  getRowHeight(): string {
    var width: number = window.innerWidth;

    if (width > 1200) {
      return "4:2";
    } else if (width < 1200) {
      return "4:1.5";
    } else {
      return "4:2";
    }
  }

}
