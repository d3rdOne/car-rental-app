import { Component, inject } from '@angular/core';

import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { LayoutService } from './layout.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';


@Component({
  selector: 'cr-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SidebarComponent, CommonModule, MenuComponent],
  providers: [LayoutService],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  constructor(public layoutService: LayoutService) {}

  closeSideBar(e: any): void {
    this.layoutService.sideBarOpen = false;
  }

  mouseEnter() {

  }

}
