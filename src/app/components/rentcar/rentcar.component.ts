import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/services/car';
import { CarImages } from '../../models/services/car-image';
import { CarService } from '../../models/car.service';
import { CarImageService } from '../../models/car-image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rentcar',
  templateUrl: './rentcar.component.html',
  styleUrl: './rentcar.component.css'
})
export class RentcarComponent implements OnInit{
  rentDetails:Car[]=[];
  
  

 constructor(private carService:CarService, private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params['carId']){
        this.getCarsDetailsId(params['carId']);
      }  
    })
  }
    getCarsDetailsId(carDetailId:number){
     this.carService.getCarDetailsId(carDetailId).subscribe((response)=>{
      this.rentDetails=response.data
     })
    }
   
}
