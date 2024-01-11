import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ProdukComponent } from './produk/produk.component';
import { FilterComponent } from './produk/filter/filter.component';
import { SearchComponent } from './produk/search/search.component';
import { FeatureBrandsComponent } from './produk/feature-brands/feature-brands.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleDemoComponent } from './lifecycle/lifecycle-demo/lifecycle-demo.component';
import { SubscribeService } from './services/subscribe.service';
import { AdminComponent } from './admin/admin.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProdukComponent,
    FilterComponent,
    SearchComponent,
    FeatureBrandsComponent,
    LifecycleComponent,
    LifecycleDemoComponent,
    AdminComponent,
    AdminListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SubscribeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
