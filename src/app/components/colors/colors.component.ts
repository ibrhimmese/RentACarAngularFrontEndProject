import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/services/color';
import { ColorService } from '../../models/color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls:['./colors.component.css']
})
export class ColorsComponent implements OnInit{
  colors:Color[]=[];
  currentColor:Color;
  filterText:"";

  constructor(private colorService:ColorService){}

  ngOnInit(): void {
    this.getColors()
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
    })
  }
  setCurrentColor(c:Color){
  this.currentColor=c;
  }
  getCurrentColorClass(c:Color){
    if(c==this.currentColor){
      return "list-group-item "; //active eklenecek
    }else{
      return "list-group-item";
    }
  }
  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item "; //active eklenecek
    }else{
      return "list-group-item";
    }
  }
}
