import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakComponent } from './break/break.component';
import { PeruComponent } from './peru/peru.component';
import { ChileComponent } from './chile/chile.component';
import { UruguayComponent } from './uruguay/uruguay.component';



@NgModule({
  declarations: [
    BreakComponent,
    PeruComponent,
    ChileComponent,
    UruguayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreakComponent,
    PeruComponent,
    ChileComponent,
    UruguayComponent
  ]
})
export class PagesModule { }
