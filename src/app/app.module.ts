import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HeroSectionComponent } from './component/hero-section/hero-section.component';
import { AboutUsSectionComponent } from './component/about-us-section/about-us-section.component';
import { ContactUsSectionComponent } from './component/contact-us-section/contact-us-section.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    HeroSectionComponent,
    AboutUsSectionComponent,
    ContactUsSectionComponent  ],
  imports: [
    BrowserModule,
      FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
