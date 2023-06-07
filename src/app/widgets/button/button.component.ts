import {
  Component,
  OnInit,
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  isDragging!: boolean;
  initialX: number = 0;
  initialY: number = 0;
  xOffset: number = 0;
  yOffset: number = 0;
  currentX: number = 0;
  currentY: number = 0;
  buttonText: string = 'Hello World!!!';
  tooltipText: string = '';
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private commonService: CommonService
  ) {}
  ngOnInit(): void {
    this.commonService.widgetConfiguration$.subscribe((value: any) => {
      var btn = document.getElementById(value.id);
      if (btn) {
        this.buttonText = value.buttonText;
      }
      this.tooltipText = value.buttonTooltip;
      if (value.buttonColor) {
        this.renderer.setStyle(
          this.el.nativeElement.children[0],
          'color',
          value.buttonColor
        );
      }
      if (value.buttonBGColor) {
        this.renderer.setStyle(
          this.el.nativeElement.children[0],
          'backgroundColor',
          value.buttonBGColor
        );
      }
      if (value.buttonBorderColor) {
        this.renderer.setStyle(
          this.el.nativeElement.children[0],
          'borderColor',
          value.buttonBorderColor
        );
      }
      if (value.buttonBorderRadius) {
        this.renderer.setStyle(
          this.el.nativeElement.children[0],
          'borderRadius',
          value.buttonBorderRadius
        );
      }
      if (value.buttonBoxShadow) {
        this.renderer.setStyle(
          this.el.nativeElement.children[0],
          'boxShadow',
          value.buttonBoxShadow
        );
      }
    });
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();

    this.isDragging = true;
    this.initialX = event.clientX - this.xOffset;
    this.initialY = event.clientY - this.yOffset;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const parentRect =
      this.el.nativeElement.parentElement.getBoundingClientRect();
    const draggableRect = this.el.nativeElement.getBoundingClientRect();
    event.preventDefault();

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

  onClick(event: any) {
    this.commonService.selectedWidget$.next({
      widgetName: 'Button',
      id: this.el.nativeElement.id,
    });
  }
}
