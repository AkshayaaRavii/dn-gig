import {
  Component,
  OnInit,
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  isDragging!: boolean;
  initialX: number = 0;
  initialY: number = 0;
  xOffset: number = 0;
  yOffset: number = 0;
  currentX: number = 0;
  currentY: number = 0;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    //event.preventDefault();

    this.isDragging = true;
    this.initialX = event.clientX - this.xOffset;
    this.initialY = event.clientY - this.yOffset;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const parentRect =
      this.el.nativeElement.parentElement.getBoundingClientRect();
    const draggableRect = this.el.nativeElement.getBoundingClientRect();
    //event.preventDefault();

    if (this.isDragging) {
      this.currentX = event.clientX - this.initialX;
      this.currentY = event.clientY - this.initialY;

      this.xOffset = this.currentX;
      this.yOffset = this.currentY;

      this.setTranslate(this.currentX, this.currentY);
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
    
  }

  private setTranslate(xPos: number = 0, yPos: number = 0) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `translate3d(${xPos}px, ${yPos}px, 0)`
    );
  }
}
