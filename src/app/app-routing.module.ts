import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { RentcarComponent } from './components/rentcar/rentcar.component';

const routes: Routes = [
  {
    path:"",component:CarComponent
  },
  {
    path:"cars",component:CarComponent
  },
  {
    path:"cars/brand/:brandId",component:CarComponent
  },
  {
    path:"colors",component:CarComponent
  },
  {
    path:"cars/color/:colorId",component:CarComponent
  },
  {
    path:"cars/car/:carId",component:CarDetailsComponent
  },
  {
    path:"cars/car/rental/:carId",component:RentcarComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
