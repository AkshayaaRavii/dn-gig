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
      imgSrc: 'assets/img/input.svg',
      tooltipText:'Text Field for the forms'
    },
    {
      name: 'Button',
      imgSrc: 'assets/img/button.svg',
      tooltipText:'Triggers Actions'
    },
    {
      name: 'Typography',
      imgSrc: 'assets/img/text.svg',
      tooltipText:'Displays Markdown'
    },
    {
      name: 'Container',
      imgSrc: 'assets/img/grid.svg',
      tooltipText: 'Wrapper for multiple components',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
