import { Directive, OnInit, ElementRef } from "@angular/core"

@Directive({
  selector: "[appBasicBorder]"
})
export class BasicBorderDirective implements OnInit {
  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.border = "4px solid black"
  }
}