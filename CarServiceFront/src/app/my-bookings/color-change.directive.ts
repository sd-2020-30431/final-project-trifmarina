import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {

  constructor(private el:ElementRef) { }

  @Input('appColorChange') color: string;

  @HostListener('mouseenter') onMouseClick() {
    this.highlight(this.color);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
