import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector: 'demo',
    template: require('./demo.pug'),
    styles: [ require('./demo.scss').toString() ]
})
export class DemoComponent implements OnInit {

    public message: string;

    constructor() {

    }

    ngOnInit() {

    }

}