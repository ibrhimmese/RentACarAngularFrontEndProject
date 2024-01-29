import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CarComponent } from './components/car/car.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorsComponent } from './components/colors/colors.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { RentcarComponent } from './components/rentcar/rentcar.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandsComponent,
    CarComponent,
    ColorsComponent,
    CarDetailsComponent,
    VatAddedPipe,
    FilterPipePipe,
    ColorFilterPipePipe,
    BrandFilterPipePipe,
    RentcarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
