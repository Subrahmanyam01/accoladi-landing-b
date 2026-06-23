import { Component } from '@angular/core';

import { LegacyPageBase } from '../../../shared/legacy-page-base';

@Component({
  selector: 'app-teacher-page',
  standalone: true,
  templateUrl: './teacher-page.component.html',
})
export class TeacherPageComponent extends LegacyPageBase {
  protected readonly bodyClasses = ['modal-open', 'popup-page', 'teacher-page'];
  protected readonly pageTitle = 'Accoladi | The Champion';
}
