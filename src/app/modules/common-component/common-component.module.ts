import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHeaderComponent } from 'src/app/components/common-header/common-header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponentRoutingModule } from './common-component-routing.module';

@NgModule({
  declarations: [CommonHeaderComponent],
  imports: [CommonModule, IonicModule, CommonComponentRoutingModule],
  exports: [CommonHeaderComponent],
})
export class CommonComponentModule {}
