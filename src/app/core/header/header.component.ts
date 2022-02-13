import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displayMobileToolbar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileToolbar(): void {
    if (this.displayMobileToolbar) {
      this.displayMobileToolbar = false;
    } else {
      this.displayMobileToolbar = true;
    }
  }

}
