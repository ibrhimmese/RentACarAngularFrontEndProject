import { Brand } from './../../models/services/brand';
import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../models/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit{

  brands:Brand[]=[];
  currentBrand:Brand;
  filterText:"";
  

  constructor (private brandService:BrandService){ }

  ngOnInit(): void {
   this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
      
    })
  }
  setCurrentBrand(b:Brand){
  this.currentBrand=b;
  //console.log(b.name)
  }

  getCurrentBrandClass(b:Brand){
    if(b==this.currentBrand){
      return "list-group-item"; //active eklenecek
    }else{
      
      return "list-group-item";
    }
  }
  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item"; //active eklenecek
    }else{
      return "list-group-item";
    }
  }
}
