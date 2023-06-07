import { CommonService } from './../../common.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-widgets-properties-sidenav',
  templateUrl: './widgets-properties-sidenav.component.html',
  styleUrls: ['./widgets-properties-sidenav.component.scss'],
  providers: [],
})
export class WidgetsPropertiesSidenavComponent implements OnInit {
  showSideMenu: boolean = true;
  selectedWidget: { widgetName: string; id: string } = {
    widgetName: '',
    id: '',
  };
  selectedTab: string = 'properties';
  buttonText: string = 'Hello World!!!';
  buttonTooltip: string = '';
  buttonBoxShadow: string = '';
  buttonBGColor: string = '#0D6EFD';
  buttonColor: string = '';
  buttonBorderColor: string = '#FFFFFF';
  buttonBorderRadius: string = '';
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.selectedWidget$.subscribe((value) => {
      this.selectedWidget = value;
    });
  }

  toggleTab() {
    if (this.selectedTab === 'properties') {
      this.selectedTab = 'styles';
    } else if (this.selectedTab === 'styles') {
      this.selectedTab = 'properties';
    }
  }

  onChange(event: any) {
    this.commonService.widgetConfiguration$.next({
      type: 'button',
      buttonText: this.buttonText,
      buttonTooltip: this.buttonTooltip,
      id: this.selectedWidget.id,
      buttonBoxShadow: this.buttonBoxShadow,
      buttonBGColor: this.buttonBGColor,
      buttonColor: this.buttonColor,
      buttonBorderColor: this.buttonBorderColor,
      buttonBorderRadius: this.buttonBorderRadius,
    });
  }
}
