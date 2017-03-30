import { Component, ContentChild, Input, EventEmitter, Output, TemplateRef, ElementRef, trigger, state, transition, animate, style } from '@angular/core';

import { AccordionTabContentDirective, AccordionTabLabelDirective } from '../../directives';

@Component({
  selector: 'et-accordion-tab',
  templateUrl: './accordion-tab.component.html',
  host: {
    '[class.-isOpen]': 'isOpen',
    '[class.-forceOpen]': 'forceOpen'
  },
  animations: [
    trigger('toggleHeight', [
      state('in', style({opacity: '1', height: '*'})),
      transition(':enter', [
        style({opacity: '0', height: '0'}),
        animate('.4s ease')
      ]),
      transition(':leave', [
        animate('.4s ease', style({opacity: '0', height: '0'}))
      ])
    ])
  ]
})
export class AccordionTabComponent {
  private open: boolean = false;

  @Input('force-open')
  public forceOpen: boolean = false;

  @Input('force-close')
  public forceClose: boolean = false;

  @Output('onTabOpen')
  public onTabOpen: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  @Output('onTabClose')
  public onTabClose: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  @Input('is-open')
  public set isOpen(value: boolean) {
    this.open = value;
  }

  public get isOpen() {
    return !this.forceClose && (this.forceOpen || this.open);
  }

  @ContentChild(AccordionTabLabelDirective, { read: TemplateRef })
  public title: AccordionTabLabelDirective;

  @ContentChild(AccordionTabContentDirective, { read: TemplateRef })
  public content: AccordionTabContentDirective;

  constructor(private element: ElementRef) { }

  ngOnChanges(changes: any) {
    if(this.forceClose) {
      this.isOpen = false;
    }
    if(this.forceOpen) {
      this.isOpen = true;
    }
  }

  public toggle($event) {
    this.toggleTab(this);
  }

  public toggleTab(tab: AccordionTabComponent) {
    // placeholder for parent element
    return false;
  }

  public onToggleAnimationDone() {
    if(this.isOpen) {
      this.onTabOpen.emit(this.element);
    } else {
      this.onTabClose.emit(this.element);
    }
  }
}
