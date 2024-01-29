import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from './services/listResponseModel';
import { Car } from './services/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) {  }
  
  getCars():Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>("https://localhost:7110/api/Cars/getall");
  }
  getProductByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>("https://localhost:7110/api/Cars/getcarlistbybrandid?brandId="+brandId);

}
 getCarByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>("https://localhost:7110/api/Cars/getcarlistbycolorid?colorId="+colorId);
 }
 getCarDetailsId(carId:number):Observable<ListResponseModel<Car>>{
  return this.httpClient.get<ListResponseModel<Car>>("https://localhost:7110/api/Cars/getlistcardetailid?id="+carId)
 }
 getCarDetails():Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>("https://localhost:7110/api/Cars/getall")
 }
 
}