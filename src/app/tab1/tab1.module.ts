import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ButtonModule, NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NgZorroAntdMobileModule,
    ButtonModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
