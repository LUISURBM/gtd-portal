import { NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WebdatarocksComponent } from '../dashboard/dashboard-components/pivot-table/pivot-table.component';
import { DirtyCheckGuard } from '../guards/dirty-check.guard';
import { GtdInputFormatterDirective } from '../guards/gtd-input.formatter';
import { GtdTextFormatterDirective } from '../guards/gtd-text.formatter';
import {
  AccordionAnchorDirective,
  AccordionDirective,
  AccordionLinkDirective,
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
    GtdInputFormatterDirective,
    GtdTextFormatterDirective,
    WebdatarocksComponent,
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    DecodeEmojiPipe,
    ConfirmDialogComponent,
    GtdInputFormatterDirective,
    GtdTextFormatterDirective,
    WebdatarocksComponent,
  ],
  providers: [
    DirtyCheckGuard,
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
