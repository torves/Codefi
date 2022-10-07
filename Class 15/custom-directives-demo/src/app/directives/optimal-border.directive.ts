import { Directive, OnInit, Renderer2, ElementRef, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appOptimalBorder]'
})
export class OptimalBorderDirective implements OnInit {
  @Input() defaultBorder: string = '4px solid white'
  @Input() customBorder: string = '4px solid gold'

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border',
      this.defaultBorder
    )
  }

  @HostListener("mouseenter")
  mouseover() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border',
      this.customBorder
    )
  }

  @HostListener("mouseleave")
  mouseleave() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border',
      this.defaultBorder
    )
  }

}
