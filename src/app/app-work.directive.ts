import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[timerWork]',
})

export class AppWorkDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
