import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditosPage } from './creditos';

@NgModule({
  declarations: [
    CreditosPage,
  ],
  imports: [
    IonicPageModule.forChild(CreditosPage),
  ],
  exports: [
    CreditosPage
  ]
})
export class CreditosPageModule {}

