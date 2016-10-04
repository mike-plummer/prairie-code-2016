import { Pipe, PipeTransform } from '@angular/core';
import { TranslatorUtil } from './translator.util';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
    public transform(value: string): string {
        if (!value) {
            return '';
        }

        return TranslatorUtil.translate(value);
    }
}
