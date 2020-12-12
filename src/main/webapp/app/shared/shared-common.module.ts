import { NgModule } from '@angular/core';

import { CourseFeedbackSystemSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CourseFeedbackSystemSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CourseFeedbackSystemSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CourseFeedbackSystemSharedCommonModule {}
