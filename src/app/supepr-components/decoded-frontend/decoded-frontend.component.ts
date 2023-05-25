import { Component, OnInit } from '@angular/core';
import { SuperUiLibService } from 'super-ui-lib';
@Component({
    selector: 'decoded-frontend',
    template: `<p>decoded-frontend</p>`
})

export class DecodedFrontendComponent implements OnInit {
    constructor(private superUIService: SuperUiLibService) { }

    ngOnInit(): void { }
}