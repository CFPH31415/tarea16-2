import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakComponent } from './pages/break/break.component';
import { PeruComponent } from './pages/peru/peru.component';
import { UruguayComponent } from './pages/uruguay/uruguay.component';
import { ChileComponent } from './pages/chile/chile.component';

const routes: Routes = [
  {path:"", component:PeruComponent},
  {path:"peru", component:PeruComponent },
  {path:"uruguay", component:UruguayComponent },
  {path:"chile", component:ChileComponent },
  {path:"404", component:BreakComponent},
  {path:"**", redirectTo:"404", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
