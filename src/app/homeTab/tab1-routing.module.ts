import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    // children: [
    //   {
    //     path: 'user',
    //     loadChildren: () =>
    //       import('../pages/user-profile/user-profile.module').then(
    //         (m) => m.UserProfilePageModule
    //       ),
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
