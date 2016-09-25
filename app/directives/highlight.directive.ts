import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[highlightElement]',
    host: {
        '(click)': 'onClick()'    
    }
})
export class HighlightDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {

    }

    onClick () {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
    }

}