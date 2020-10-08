import { Component,OnInit  } from '@angular/core';
import * as data from './services/catalog.json';
import { Router } from '@angular/router';
declare var jQuery:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rms';
  result: any = (data as any).default;
  locations:any;
  categories:any;
  subcategories:any;
  branchName:string;
  catName:string;
 constructor(private router:Router){

 }
  ngOnInit(){
    this.locations=this.result.data.locations
   
  }



  showCategory(item){
  
    this.branchName=item.name
    this.categories=item.categories;
  
  }

  showSubCat(item){
  
    this.catName=item.name
    this.subcategories=item.subcategories
    jQuery('#myModal').modal('show');

  }
}
