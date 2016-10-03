import { Component, OnInit, Inject } from '@angular/core';
import { FactsService } from '../facts/facts.service';

@Component({
    selector: 'facts',
    template: require('./facts.pug'),
    styles: [ require('./facts.scss').toString() ]
})
export class FactsComponent implements OnInit {

    public currentFact: string;

    constructor(@Inject(FactsService) private factsService: FactsService) {

    }

    ngOnInit() {
        this.factsService.loadFacts();
    }

    loadFact() {
        this.currentFact = this.factsService.getFact();
    }
}