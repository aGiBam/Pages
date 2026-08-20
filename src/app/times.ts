import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[times]',
})
export class Times {
  constructor(
    private  viewContainer: ViewContainerRef,
    private  templateRef: TemplateRef<any>,
  ){}
  @Input('times') set render(times: number) {
    this.viewContainer.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
