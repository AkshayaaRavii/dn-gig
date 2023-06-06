import {
  Component,
  Renderer2,
  ViewChild,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';

const enum Status {
  OFF = 0,
  RESIZE = 1,
  MOVE = 2,
}
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  width = 300;
  height = 150;
  color = 'red';
  init: any;

  left: number = 15;
  top: number = 15;

  @ViewChild('box') public box!: ElementRef;
  private boxPosition!: { left: number; top: number };
  private containerPos!: {
    left: number;
    top: number;
    right: number;
    bottom: number;
  };
  public mouse!: { x: number; y: number };
  public status: Status = Status.OFF;
  private mouseClick!: { x: number; y: number; left: number; top: number };

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.loadBox();
    this.loadContainer();
  }

  private loadContainer() {
    const left = this.boxPosition.left - this.left;
    const top = this.boxPosition.top - this.top;
    const right = left + 600;
    const bottom = top + 450;
    this.containerPos = { left, top, right, bottom };
  }

  private loadBox() {
    const { left, top } = this.box.nativeElement.getBoundingClientRect();
    this.boxPosition = { left, top };
  }

  dragEvent(event: MouseEvent, status: number) {
    console.log(event, status);
    if (status === 1) {
      this.init = { x: event.pageX, width: this.width, height: this.height };
      event.stopPropagation();
    } else if (status === 2) {
      this.mouseClick = {
        x: event.clientX,
        y: event.clientY,
        left: this.left,
        top: this.top,
      };
    } else {
      this.loadBox();
    }

    this.status = status;
  }

  getHeight(length: any, ratio: any) {
    let height = length / Math.sqrt(Math.pow(ratio, 2) + 1);
    return Math.round(height);
  }

  getWidth(length: any, ratio: any) {
    let width = length / Math.sqrt(1 / (Math.pow(ratio, 2) + 1));
    return Math.round(width);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse = { x: event.clientX, y: event.clientY };

    if (this.status === Status.RESIZE) this.resize(event);
    else if (this.status === Status.MOVE) this.move();
  }

  private resize(e: any) {
    const newWidth = this.init.width + e.pageX - this.init.x;
    const newHeight = this.init.height + e.pageX - this.init.x;
    const minSize = 10;

    if (newWidth < minSize || newHeight < minSize) return;

    this.width = newWidth;
    this.height = newHeight;
  }

  private move() {
    this.left = this.mouseClick.left + (this.mouse.x - this.mouseClick.x);
    this.top = this.mouseClick.top + (this.mouse.y - this.mouseClick.y);
  }
}
