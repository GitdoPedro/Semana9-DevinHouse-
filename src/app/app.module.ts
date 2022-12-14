import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { FormsModule } from '@angular/forms';
import { DadosCardComponent } from './item-card/dados-card/dados-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    ModalComponent,
    ItemCardComponent,
    DadosCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
