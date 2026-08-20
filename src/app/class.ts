import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class Class {
  constructor(private element: ElementRef ) {
    this.element.nativeElement.style.backgroundColor = 'orange';
    console.log('Class Directive used !');

  }
}
