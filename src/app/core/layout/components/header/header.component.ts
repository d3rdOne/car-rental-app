import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Routes } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'cr-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public layoutService: LayoutService
  ) {}


}
