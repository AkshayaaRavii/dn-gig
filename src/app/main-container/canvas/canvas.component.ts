import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ButtonComponent } from 'src/app/widgets/button/button.component';
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
    const x1 = event.clientX;
    const y1 = event.clientY;
    if (data) {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(
          data === 'Button'
            ? ButtonComponent
            : data === 'Input'
            ? InputComponent
            : // : data === 'Cards'
              // ? ContainerComponent
              TypographyComponent
        );
      const componentRef = this.container.createComponent(componentFactory);
      componentRef.location.nativeElement.style.position = 'absolute';
      componentRef.location.nativeElement.style.left = x1 + 'px';
      componentRef.location.nativeElement.style.top = y1 + 'px';
      componentRef.location.nativeElement.id = data;
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
}
