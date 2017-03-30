import { Component, QueryList, ContentChildren, Input, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AccordionTabComponent } from './components';

@Component({
  selector: 'et-accordion',
  templateUrl: './accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
  private subscriptions: Subscription[] = [];

  @ContentChildren(AccordionTabComponent)
  public tabs: QueryList<AccordionTabComponent>;

  @Input('multiple')
  public multiple: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    this.tabsInit();
    this.subscriptions.push(this.tabs.changes.subscribe(changes => {
      this.tabsInit();
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private tabsInit() {
    this.tabs.forEach(tab => {
        tab.toggleTab = this.toggleTab.bind(this);
    });
  }

  private toggleTab(target: AccordionTabComponent) {
    if(!target.isOpen && !this.multiple) {
      this.tabs.forEach(tab => tab.isOpen = tab === target);
    } else {
      target.isOpen = !target.isOpen;
    }
  }
}
