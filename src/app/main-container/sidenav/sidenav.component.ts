import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  showSideMenu: boolean = true;
  widgetList: any[] = [
    {
      name: 'Input',
    },
    {
      name: 'Button',
    },
    {
      name: 'Text',
    },
    {
      name: 'Container',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
