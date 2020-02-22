import { SigComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NavCompComponent } from './layouts/nav-comp/nav-comp.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [SigComponent, NavCompComponent, BannerOneComponent, ProductsComponent, BannerTwoComponent, ContactComponent, FooterComponent],
  imports: [BrowserModule],
  bootstrap: [SigComponent]
})
export class SigModule {}
