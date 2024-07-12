import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public sideBarOpen: boolean = false; // Default: true
  public sideBarPinned: boolean = true; // Default: true
  public sideBarHovered: boolean = false;
  constructor() { }
}
