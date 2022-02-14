import { Component, OnInit } from '@angular/core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-pages-index-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  faDiscord = faDiscord;

  constructor() { }

  ngOnInit(): void {
  }

}
