
import { Component, OnInit } from '@angular/core';
import { CarService } from '../../models/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../models/services/car';
import { CarImages } from '../../models/services/car-image';
import { CarImageService } from '../../models/car-image.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit {
  carDetails:Car[]=[] ;
  carImages:CarImages[]=[];
  imageUrl="./assets/img/"

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private carImageService:CarImageService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params['carId']){
        this.getCarsDetailsId(params['carId']);
        this.getCarImagesByCarId(params['carId']);
      }
      
    })
  }
 
  getCarsDetailsId(carDetailId: number) {
    this.carService.getCarDetailsId(carDetailId).subscribe((response) => {
      this.carDetails = response.data;
  
    });
  }
  getCarImagesByCarId(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }
  getImagePath(carImages: CarImages) {
    let imagePath = this.imageUrl + carImages.imagePath;
    return imagePath;
  }
}
