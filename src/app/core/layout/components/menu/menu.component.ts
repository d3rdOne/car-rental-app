import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { LayoutService } from '../../layout.service';



@Component({
  selector: 'cr-menu',
  standalone: true,
  imports: [MenuModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] | undefined;

  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: 'home'
      },
      {
        label: 'Cars',
        icon: 'pi pi-car',
        routerLink: 'cars'
      },
      {
        label: 'About',
        icon: 'pi pi-book',
        routerLink: 'about'
      },
      {
        label: 'Contact',
        icon: 'pi pi-address-book',
        routerLink: 'contact'
      }
    ]
  }


}
