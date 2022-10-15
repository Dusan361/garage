import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductLiComponent } from './product-li/product-li.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CartComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ProductInfoComponent,
    ProductLiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
