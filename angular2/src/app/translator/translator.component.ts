import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector: 'translator',
    template: require('./translator.pug'),
    styles: [ require('./translator.scss').toString() ]
})
export class TranslatorComponent implements OnInit {

    public message: string;

    constructor() {

    }

    ngOnInit() {

    }

}