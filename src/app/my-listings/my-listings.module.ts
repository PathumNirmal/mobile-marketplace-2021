import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyListingsPageRoutingModule } from './my-listings-routing.module';

import { MyListingsPage } from './my-listings.page';
import { MyListingsAddPage } from '../my-listings-add/my-listings-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyListingsPageRoutingModule
  ],
  declarations: [MyListingsPage,MyListingsAddPage],
  entryComponents:[MyListingsAddPage]
})
export class MyListingsPageModule {}
