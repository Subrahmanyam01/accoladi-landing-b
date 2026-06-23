import { Component } from '@angular/core';

import { LegacyPageBase } from '../../../shared/legacy-page-base';

@Component({
  selector: 'app-why-page',
  standalone: true,
  templateUrl: './why-page.component.html',
})
export class WhyPageComponent extends LegacyPageBase {
  protected readonly bodyClasses = ['modal-open', 'popup-page'];
  protected readonly pageTitle = 'Accoladi | Why We Do It';
}
