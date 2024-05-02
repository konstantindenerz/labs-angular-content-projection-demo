import { CommonModule } from '@angular/common';
import { Component, computed, contentChild, effect, inject, Injector, TemplateRef } from '@angular/core';
import { FOO_TOKEN } from '../../foo.token';
import { CardTitleComponent } from './card-title/card-title.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  providers: [{ provide: FOO_TOKEN, useValue: '🐬' }]
})
export class CardComponent {
  title = contentChild(CardTitleComponent);
  contentTemplate = contentChild(TemplateRef);
  hasTemplate = computed(() => !!this.contentTemplate());
  template = computed(() => this.contentTemplate() as TemplateRef<unknown>);
  private readonly injector = inject(Injector);
  //
  // @ContentChild(CardTitleComponent)
  // title2?: CardTitleComponent;
  //
  // @ContentChildren(CardTitleComponent)
  // title3: QueryList<CardTitleComponent> = new QueryList<CardTitleComponent>();

  constructor() {

    effect(() => {
      console.log('✨title', this.title()?.maxLength());
      console.log('✨contentTemplate', this.contentTemplate());
    });
  }

  //
  // ngOnInit(): void {
  //   console.log('🔥 ngOnInit - Title', this.title2?.maxLength());
  //   }

  // ngAfterContentInit(): void {
  //   // console.log('🔥 ngAfterContentInit - Title', this.title2?.maxLength());
  //   console.log('🔥 ngAfterContentInit - Title', this.title3.length);
  //   this.title3.changes.subscribe((titles: QueryList<CardTitleComponent>) => {
  //     console.log('🔥 ngAfterContentInit -changes - Title', titles.length);
  //   });
  // }
}
