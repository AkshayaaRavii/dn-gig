import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets-properties-sidenav',
  templateUrl: './widgets-properties-sidenav.component.html',
  styleUrls: ['./widgets-properties-sidenav.component.scss'],
})
export class WidgetsPropertiesSidenavComponent implements OnInit {
  showSideMenu: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
