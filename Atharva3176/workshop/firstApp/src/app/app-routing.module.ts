import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { DelbookComponent } from './delbook/delbook.component';

const routes: Routes = [
  {path:'add-book',component:AddbookComponent},
  {path:'del-book',component:DelbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
