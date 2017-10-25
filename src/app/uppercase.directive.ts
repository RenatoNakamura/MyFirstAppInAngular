import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[upperCase]' //por ser atributo '[]'
})
export class UppercaseDirective{
    constructor(
        private el: ElementRef
    ){}
    
    @HostListener("keyup") keyup(){
        this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
    }
}