import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputBackground]'
})
export class InputBackgroundDirective {
 @Input() appInputBackground: string = 'white';
 @Input('tColor') textColor: string = 'black';

 @HostBinding('style.color') color: string = '';

 @HostBinding('style.backgroundColor') bgColor: string = '';

 @HostListener('focus')
 onFocus(){
  this.bgColor = this.appInputBackground;
  this.color = this.textColor;
 }
 @HostListener('blur')
 onBlur(){
  this.bgColor = 'white';
  this.color = 'black';
 }
}
