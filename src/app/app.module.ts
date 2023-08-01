import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { MobileHeaderComponent } from './components/layouts/mobile-header/mobile-header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { CategoryComponent } from './pages/category/category.component';
import { SearchComponent } from './pages/search/search.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    MobileHeaderComponent,
    FooterComponent,
    CategoryComponent,
    SearchComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
