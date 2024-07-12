
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { LayoutService } from '../../layout.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: 'cr-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, RippleModule, DividerModule, ButtonModule, MenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{

  constructor(public layoutService: LayoutService) {}




  ngOnInit(): void {

  }

  pinToggle() {
    this.layoutService.sideBarPinned = !this.layoutService.sideBarPinned
  }
}
