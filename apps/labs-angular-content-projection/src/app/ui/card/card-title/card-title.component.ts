import { CommonModule } from '@angular/common';
import { Component, inject, Injector, input } from '@angular/core';
import { FOO_TOKEN } from '../../../foo.token';

@Component({
  selector: 'app-card-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.scss'
})
export class CardTitleComponent {
  maxLength = input(100);
  foo = inject(FOO_TOKEN);
  private readonly injector = inject(Injector);

  constructor() {
    console.log(this.foo);
  }
}
