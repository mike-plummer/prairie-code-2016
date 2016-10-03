import { Injectable } from '@angular/core';

@Injectable()
export class FactsService {

    private facts: string[];
    private index: number = 0;

    public loadFacts() {
        const factFile = require('!!raw!../../../assets/facts.json');
        this.facts = <string[]> JSON.parse(factFile).facts;
    }

    public getFact(): string {
        let fact = this.facts[this.index];
        this.index = (this.index + 1) % this.facts.length;
        return fact;
    }
}