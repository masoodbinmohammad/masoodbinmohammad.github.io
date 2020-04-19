import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}

  contactProfile = {
    profile: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/masoodbinmohmd',
        iconUrl: './assets/icon/twitter.svg'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/masoodbinmohammad/',
        iconUrl: './assets/icon/instagram.svg'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/masood-mohammad-369576116',
        iconUrl: './assets/icon/linkedin.svg'
      }
    ],
    work: [
      {
        name: 'GitHub',
        url: 'https://github.com/masoodbinmohammad',
        iconUrl: './assets/icon/github.svg'
      },
      {
        name: 'Hackerrank',
        url: 'https://www.hackerrank.com/masoodmohammad',
        iconUrl: './assets/icon/hackerrank.svg'
      },
      {
        name: 'Pluralsight',
        url: 'https://www.pluralsight.com/profile/masoodbinmohammad',
        iconUrl: './assets/icon/pluralsight.svg'
      }
    ]
  };

  email = {
    name: 'Email',
    url: 'mailto:masoodbinmohammad@hotmail.com',
    iconUrl: './assets/icon/email.svg'
  };

  vscodeMarketplace = {
    name: 'VSCode Extension Publisher',
    url: 'https://marketplace.visualstudio.com/publishers/masoodbinmohammad',
    iconUrl: './assets/icon/vscode.svg'
  };
  ngOnInit() {}

  onBackClick() {
    this.router.navigateByUrl('/');
  }
}
