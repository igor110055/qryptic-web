import { Component, OnInit } from '@angular/core';
import { 
  faDiscord,
  faMedium,
  faInstagram,
  faTwitter,
  faLinkedin,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-core-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faDiscord = faDiscord;
  faMedium = faMedium;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faTelegram = faTelegram;

  constructor() { }

  ngOnInit(): void {
  }

}
