import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { DraggableDirective } from './directives/draggable.directive';
import { CanvasComponent } from './main-container/canvas/canvas.component';
import { WidgetsPropertiesSidenavComponent } from './main-container/widgets-properties-sidenav/widgets-properties-sidenav.component';
import { SidenavComponent } from './main-container/sidenav/sidenav.component';
import { MainContainerModule } from './main-container/main-container.module';
import { MainContainerComponent } from './main-container/main-container.component';
import {ButtonComponent} from './widgets/button/button.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DraggableDirective,
    CanvasComponent,
    WidgetsPropertiesSidenavComponent,
    SidenavComponent,
    MainContainerComponent,
    ButtonComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, MainContainerModule],
  exports: [MainContainerComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
