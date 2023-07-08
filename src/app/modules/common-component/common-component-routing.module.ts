import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonHeaderComponent } from 'src/app/components/common-header/common-header.component';

const routes: Routes = [
  {
    path: '',
    component: CommonHeaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonComponentRoutingModule {}
