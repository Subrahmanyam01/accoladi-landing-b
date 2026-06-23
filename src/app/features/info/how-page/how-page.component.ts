import { Component } from '@angular/core';

import { LegacyPageBase } from '../../../shared/legacy-page-base';

@Component({
  selector: 'app-how-page',
  standalone: true,
  templateUrl: './how-page.component.html',
})
export class HowPageComponent extends LegacyPageBase {
  protected readonly bodyClasses = ['modal-open', 'popup-page'];
  protected readonly pageTitle = 'Accoladi | How We Do It';
}
