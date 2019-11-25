import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BibliotecaInfoPage } from './biblioteca-info.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BibliotecaInfoPage]
})
export class BibliotecaInfoPageModule {}
