import { Component } from '@angular/core';

@Component({
    selector: 'translator',
    template: require('./translator.pug'),
    styles: [ require('./translator.scss').toString() ]
})
export class TranslatorComponent {

    public message: string;

    constructor() {}
}