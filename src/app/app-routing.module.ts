import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'imprint', component: ImprintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 90] // [x, y]
  })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}