
import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/services/car';
import { CarService } from '../../models/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  currentCar:Car | null=null;
  dataLoaded=false;
  filterText="";
   
  constructor(private carService:CarService,
              private activatedRoute:ActivatedRoute){ }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"])
      }
     
      else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      }
      else{
        this.getCars();
      }
    })
  }
  
  getCars(){
    this.carService.getCars().subscribe(response=>{
      
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }
  getCarsByBrandId(brandId:number){
    this.carService.getProductByBrandId(brandId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }
  setCurrentCar(c:Car){
    this.currentCar = c;
  }
  getCarsDetailById(carId: number) {
    this.carService.getCarDetailsId(carId).subscribe((response) => {
      this.cars = response.data;    
    });
  }
  getCarsByColorId(colorId:number){
    this.carService.getCarByColorId(colorId).subscribe((response)=>{
      this.cars = response.data;
    })
  }
}
