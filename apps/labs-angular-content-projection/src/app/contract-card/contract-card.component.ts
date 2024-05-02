import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardTitleComponent } from '../ui/card/card-title/card-title.component';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-contract-card',
  standalone: true,
  imports: [CommonModule, CardComponent, CardTitleComponent],
  templateUrl: './contract-card.component.html',
  styleUrl: './contract-card.component.scss'
})
export class ContractCardComponent {
}
