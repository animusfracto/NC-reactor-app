import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface NgLetContext {
  $implicit: any;
  ngLet: any;
}

@Directive({
  selector: '[ngLet]'
})
export class NgLetDirective {
  @Input()
  set ngLet(value: any) {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      $implicit: value,
      ngLet: value
    });
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<NgLetContext>
  ) { }

}
