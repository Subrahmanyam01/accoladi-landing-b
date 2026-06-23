import { Component } from '@angular/core';

import { LegacyPageBase } from '../../../shared/legacy-page-base';

@Component({
  selector: 'app-story-page',
  standalone: true,
  templateUrl: './story-page.component.html',
})
export class StoryPageComponent extends LegacyPageBase {
  protected readonly bodyClasses = ['modal-open', 'popup-page'];
  protected readonly pageTitle = 'Accoladi | The Story';
}
