import { Component } from '@angular/core';

import { LegacyPageBase } from '../../../shared/legacy-page-base';

@Component({
  selector: 'app-what-page',
  standalone: true,
  templateUrl: './what-page.component.html',
})
export class WhatPageComponent extends LegacyPageBase {
  protected readonly bodyClasses = ['modal-open', 'popup-page'];
  protected readonly pageTitle = 'Accoladi | What We Do';
}
