import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  screenWidth: number;
  links = [
    {
      name: 'invoices',
      url: 'invoices',
    },
    {
      name: 'clients',
      url: 'clients',
    },
  ];
  constructor() {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }

  ngOnInit(): void {}
  isSmallScreen(): boolean {
    return this.screenWidth < 720;
  }
}
