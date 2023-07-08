import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HomePageModule } from '../pages/home/home.module';
import { CommonComponentModule } from '../modules/common-component/common-component.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    // HomePageModule, //i don't even have to add the selector, only doing this shows the component, surprising !!!!!
    Tab1PageRoutingModule,
    CommonComponentModule,
  ],
  declarations: [Tab1Page],
})
export class Tab1PageModule {}
