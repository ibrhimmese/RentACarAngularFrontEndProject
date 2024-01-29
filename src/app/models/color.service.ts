import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from './services/listResponseModel';
import { Color } from './services/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
      return this.httpClient.get<ListResponseModel<Color>>("https://localhost:7110/api/Colors/getall");
  }
}
