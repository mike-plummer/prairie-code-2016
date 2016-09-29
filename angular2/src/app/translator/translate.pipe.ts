import { Pipe, PipeTransform } from '@angular/core';
const VOWEL_REGEX: RegExp = /[aeiou]/i;

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return '';
        }
        let results: RegExpExecArray = VOWEL_REGEX.exec(value);
        if (!results) {
            return `${value}-ay`;
        } else {
            let firstVowelIndex = value.indexOf(results[0]);
            if (firstVowelIndex === 0) {
                return `${value}-way`;
            } else {
                return `${value.substring(firstVowelIndex)}-${value.substring(0, firstVowelIndex)}ay`;
            }
        }
    }
}
