import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsPropertiesSidenavComponent } from './widgets-properties-sidenav.component';

describe('WidgetsPropertiesSidenavComponent', () => {
  let component: WidgetsPropertiesSidenavComponent;
  let fixture: ComponentFixture<WidgetsPropertiesSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsPropertiesSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsPropertiesSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
