const VOWEL_REGEX: RegExp = /[aeiou]/i;
const WHITESPACE_REGEX: RegExp = /\s/;

export class TranslatorUtil {
    public static translate(value: string): string {
        return value.split(WHITESPACE_REGEX)
            .map(this.translateWord)
            .join(' ');
    }

    private static translateWord(word: string): string {
        let results: RegExpExecArray = VOWEL_REGEX.exec(word);
        if (!results) {
            return `${word}-ay`;
        } else {
            let firstVowelIndex = word.indexOf(results[ 0 ]);
            if (firstVowelIndex === 0) {
                return `${word}-way`;
            } else {
                return `${word.substring(firstVowelIndex)}-${word.substring(0, firstVowelIndex)}ay`;
            }
        }
    }
}