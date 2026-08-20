import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class Class {

  constructor(private element: ElementRef ) {
    // console.log('Class Directive used !');
  }

  @Input() set appClass(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
