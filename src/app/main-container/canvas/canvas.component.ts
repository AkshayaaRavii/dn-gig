import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ButtonComponent } from 'src/app/widgets/button/button.component';
import { ContainerComponent } from 'src/app/widgets/container/container.component';
import { InputComponent } from 'src/app/widgets/input/input.component';
import { TypographyComponent } from 'src/app/widgets/typography/typography.component';
@ViewChild('container', { read: ViewContainerRef })
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  onDrop(event: DragEvent) {
    event.preventDefault();
    let data = event.dataTransfer && event.dataTransfer.getData('text');

    event.preventDefault();
    var rect = (event.target as HTMLElement).getBoundingClientRect();
    // var x = event.clientX - rect.left;
    // var y = event.clientY - rect.top;
    const x1 = event.clientX;
    const y1 = event.clientY;
    // const x1 = x;
    // const y1 = y;
    if (data) {
      let componentFactory: any;
      if (data === 'Button') {
        componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(
            ButtonComponent
          );
      } else if (data === 'Input') {
        componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(InputComponent);
      } else if (data === 'Text') {
        componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(
            TypographyComponent
          );
      } else if (data === 'Container') {
        componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(
            ContainerComponent
          );
      }

      const componentRef =
        componentFactory && this.container.createComponent(componentFactory);
      componentRef.location.nativeElement.style.position = 'absolute';
      componentRef.location.nativeElement.style.left = x1 + 'px';
      componentRef.location.nativeElement.style.top = y1 + 'px';
      componentRef.location.nativeElement.id = data + '_' + this.getRandomId();
      event.preventDefault();
    } // else {
    //   const draggedElement = data && document.getElementById(data);
    //   const dropzone = event.target as HTMLElement;
    //   const x = event.clientX - dropzone.offsetLeft;
    //   const y = event.clientY - dropzone.offsetTop;
    //   if (draggedElement) {
    //     draggedElement.style.position = 'absolute';
    //     draggedElement.style.left = x + 'px';
    //     draggedElement.style.top = y + 'px';
    //   }
    // }
  }

  getRandomId() {
    return Math.random().toString();
  }
}
