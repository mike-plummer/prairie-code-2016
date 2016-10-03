import { Pipe, PipeTransform } from '@angular/core';
const VOWEL_REGEX: RegExp = /[aeiou]/i;
const WHITESPACE_REGEX: RegExp = /\s/;

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
    public transform(value: string): string {
        if (!value) {
            return '';
        }

        return value.split(WHITESPACE_REGEX)
            .map(this.translateWord)
            .join(' ');
    }

    private translateWord(word: string): string {
        let results: RegExpExecArray = VOWEL_REGEX.exec(word);
        if (!results) {
            return `${word}-ay`;
        } else {
            let firstVowelIndex = word.indexOf(results[0]);
            if (firstVowelIndex === 0) {
                return `${word}-way`;
            } else {
                return `${word.substring(firstVowelIndex)}-${word.substring(0, firstVowelIndex)}ay`;
            }
        }
    }
}
