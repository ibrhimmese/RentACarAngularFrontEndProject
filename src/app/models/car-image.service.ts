import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from './services/listResponseModel';
import { CarImages } from './services/car-image';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  constructor(private httpClient:HttpClient) { }

  getImagesByCarId(carId:number):Observable<ListResponseModel<CarImages>>{
      return this.httpClient.get<ListResponseModel<CarImages>>("https://localhost:7110/api/CarImages/getbycarid?carId="+carId)
  }
}
