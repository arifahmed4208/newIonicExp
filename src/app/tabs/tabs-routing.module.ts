import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../homeTab/tab1.module').then((m) => m.Tab1PageModule),
          },
          {
            path: 'user',
            loadChildren: () =>
              import('../pages/user-profile/user-profile.module').then(
                (m) => m.UserProfilePageModule
              ),
          },
        ],
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
      // {
      //   path: 'home/user',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../pages/user-profile/user-profile.module').then(
      //           (m) => m.UserProfilePageModule
      //         ),
      //     },
      //   ],
      // },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
