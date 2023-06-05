import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDraggable]',
})
export class DraggableDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'draggable',
      'true'
    );

    this.elementRef.nativeElement.addEventListener(
      'dragstart',
      (event: any) => {
        event.dataTransfer.setData(
          'text/plain',
          this.elementRef.nativeElement.id
        );
      }
    );

    this.elementRef.nativeElement.addEventListener('dragover', (event: any) => {
      event.preventDefault();
    });
  }
}
