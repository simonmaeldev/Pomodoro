import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[timerPosition]',
})

export class AppPosDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
