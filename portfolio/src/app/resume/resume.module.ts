import { NgModule } from '@angular/core';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    SharedModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
