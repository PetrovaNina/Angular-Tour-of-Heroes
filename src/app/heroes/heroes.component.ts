import { Component } from '@angular/core';
import { Hero } from '../hero';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  heroes = HEROES;
}
