import {
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { numberWithCommas } from '../types/common-types';

@Directive({
  selector: 'input[gtdInputFormatter]',
  providers: [
    {
      provide: MAT_INPUT_VALUE_ACCESSOR,
      useExisting: GtdInputFormatterDirective,
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GtdInputFormatterDirective),
      multi: true,
    },
  ],
})
export class GtdInputFormatterDirective {
  // tslint:disable-next-line:variable-name
  private _value?: string;

  constructor(private elementRef: ElementRef<HTMLInputElement>) {
    console.log('created directive');
  }

  get value(): string {
    return this._value!;
  }

  @Input('value')
  set value(value: string) {
    this._value = value;
    this.formatValue(value);
  }

  private formatValue(value: string | null) {
    if (value !== null) {
      this.elementRef.nativeElement.value = numberWithCommas(+value);
    } else {
      this.elementRef.nativeElement.value = '';
    }
  }

  private unFormatValue() {
    const value = +this.elementRef.nativeElement.value;
    this._value = value.toString();
    if (value) {
      this.elementRef.nativeElement.value = this._value;
    } else {
      this.elementRef.nativeElement.value = '';
    }
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: any) {
    // here we cut any non numerical symbols
    this._value = value.replace(/[^\d.-]/g, '');
    this._onChange(this._value);
  }

  @HostListener('blur')
  _onBlur() {
    this.formatValue(this._value!); // add commas
  }

  @HostListener('focus')
  onFocus() {
    this.unFormatValue(); // remove commas for editing purpose
  }
  _onChange(value: any): void {}

  writeValue(value: any) {
    this._value = value;
    this.formatValue(this._value!); // format Value
  }

  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched() {}
}
