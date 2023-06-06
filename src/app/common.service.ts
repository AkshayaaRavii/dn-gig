import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  selectedWidget$: Subject<any> = new Subject();
  widgetConfiguration$: Subject<any> = new Subject();
  constructor() { }
}
