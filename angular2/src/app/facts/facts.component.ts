import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { FactsService } from '../facts/facts.service';

@Component({
    selector: 'facts',
    template: require('./facts.pug'),
    styles: [ require('./facts.scss').toString() ]
})
export class FactsComponent implements OnInit {

    public currentFact: string;

    @Output()
    public factGenerated = new EventEmitter<any>();

    constructor(@Inject(FactsService) private factsService: FactsService) {

    }

    ngOnInit() {
        this.factsService.loadFacts();
    }

    loadFact() {
        this.currentFact = this.factsService.getFact();
        this.factGenerated.emit();
    }
}