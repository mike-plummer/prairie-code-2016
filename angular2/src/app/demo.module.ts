import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslatorComponent } from './translator/translator.component';
import { FactsService } from './facts/facts.service';
import { TranslatePipe } from './translator/translate.pipe';
import { FactsComponent } from './facts/facts.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ DemoComponent, TranslatorComponent, FactsComponent, TranslatePipe ],
    bootstrap: [ DemoComponent ],
    providers: [ FactsService ]
})
export class DemoModule {
    constructor() {
    }
}