import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji',
})
export class EmojiPipe implements PipeTransform {
  transform(value: string): string {
    const code = value.split('+')[1];
    return String.fromCodePoint(parseInt(code, 16));
  }
}
