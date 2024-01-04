import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ProdukComponent } from './produk/produk.component';
import { FilterComponent } from './produk/filter/filter.component';
import { SearchComponent } from './produk/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProdukComponent,
    FilterComponent,
    SearchComponent
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
