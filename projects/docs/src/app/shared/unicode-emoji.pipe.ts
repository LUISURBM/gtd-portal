import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({ name: 'gtdEmoji' })
export class DecodeEmojiPipe implements PipeTransform {
  transform(emojiCodePoint: any, exponent = 1): string {
    return String.fromCodePoint(
      ...emojiCodePoint.split('-').map((i: any) => parseInt(i, 16))
    );
  }
}
