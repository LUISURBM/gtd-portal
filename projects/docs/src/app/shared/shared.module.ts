import {
  FullscreenOverlayContainer,
  OverlayContainer,
} from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  AccordionAnchorDirective,
  AccordionDirective,
  AccordionLinkDirective,
} from './accordion';
import { MenuItems } from './menu-items/menu-items';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent,
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent,
  ],
  providers: [
    MenuItems,
    {
      provide: MatDialogRef,
      useValue: {},
    },
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
  ],
})
export class SharedModule {}
