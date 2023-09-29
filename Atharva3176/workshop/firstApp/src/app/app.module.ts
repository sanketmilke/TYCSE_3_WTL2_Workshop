import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BookDataComponent } from './book-data/book-data.component';
import { FormHandlingComponent } from './form-handling/form-handling.component';
import { AddbookComponent } from './addbook/addbook.component';
import { DelbookComponent } from './delbook/delbook.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDataComponent,
    FormHandlingComponent,
    AddbookComponent,
    DelbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
