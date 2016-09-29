import { Injectable } from '@angular/core';

@Injectable()
export class FactsService {
    constructor() {

    }

    public get(input: string): string {
        return 'Facts!';
    }
}