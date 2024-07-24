import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  // @HostBinding('attr.style')
  // attrStyle = 'background-color: orange; color: white;'
  // @HostBinding('style') propStyle = 'background-color: orange; color: white;'
  // @HostBinding('style') propStyleObj = {
  //   backgroundColor: 'orange',
  //   color: 'white',
  // }
   //@HostBinding('style.backgroundColor') bgColor = 'orange';
  // @HostBinding('style.color') Color = 'white';
// @HostBinding('style.fontSize.px') size = 50;
@HostBinding('style.fontSize') size = '50px';

}
