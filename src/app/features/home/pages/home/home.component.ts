import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturedCarsComponent } from '../../components/featured-cars/featured-cars.component';

@Component({
  selector: 'cr-home',
  standalone: true,
  imports: [CardModule, HeroComponent, FeaturedCarsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
