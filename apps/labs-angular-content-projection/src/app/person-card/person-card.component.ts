import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTitleComponent } from '../ui/card/card-title/card-title.component';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [CommonModule, CardComponent, CardTitleComponent],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.scss',
})
export class PersonCardComponent {}
