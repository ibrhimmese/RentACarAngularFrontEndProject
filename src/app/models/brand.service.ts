import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from './services/listResponseModel';
import { Brand } from './services/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private httpClient:HttpClient) {  }
  
  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>("https://localhost:7110/api/Brands/getall");
  }
  
}
