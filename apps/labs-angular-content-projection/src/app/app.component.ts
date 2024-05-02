import { CommonModule } from '@angular/common';
import { Component, inject, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContractCardComponent } from './contract-card/contract-card.component';
import { FOO_TOKEN } from './foo.token';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { CardTitleComponent } from './ui/card/card-title/card-title.component';
import { CardComponent } from './ui/card/card.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, RouterModule, ContractCardComponent, PersonCardComponent, CardComponent, CardTitleComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: FOO_TOKEN, useValue: '🌴' }]
})
export class AppComponent {
  title = 'labs-angular-content-projection';
  showCardTitle = true;
  private readonly injector = inject(Injector);
  toggle() {
    this.showCardTitle = !this.showCardTitle;
  }
}
