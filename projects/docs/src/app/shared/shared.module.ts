import { NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  AccordionAnchorDirective,
  AccordionDirective,
  AccordionLinkDirective
} from './accordion';
import { ConfirmDialogComponent } from './dialog/confirm/confirm-dialog.component';
import { MenuItems } from './menu-items/menu-items';
import { DecodeEmojiPipe } from './unicode-emoji.pipe';

@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    DecodeEmojiPipe,
    ConfirmDialogComponent,
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    DecodeEmojiPipe,
    ConfirmDialogComponent,
  ],
  providers: [
    MenuItems,
    {
      provide: MatDialogRef,
      useValue: {},
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}, // Add any data you wish to test if it is passed/used correctly
    },
    // { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
  ],
})
export class SharedModule {}
