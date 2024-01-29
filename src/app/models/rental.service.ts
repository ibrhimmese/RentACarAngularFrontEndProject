import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rental } from './services/rental';
import { Observable } from 'rxjs';
import { ResponseModel } from './services/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }

  addRental(rental: Rental): Observable<ResponseModel> {
   
    return this.httpClient.post<ResponseModel>("https://localhost:7110/api/Rentals/add",rental);
  }
}
