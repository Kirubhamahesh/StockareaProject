import { Component, OnInit, OnDestroy} from '@angular/core';

import { warehouseservice } from 'src/app/service/warehouse.service';
import { Warehousemodel } from 'src/app/model/warehouse.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  products: Warehousemodel[];
  copywarehouse = []
  searchText: string;
  filterarray = []
  warehousenames: any[];
  private subscription: Subscription;
  private copysubscription: Subscription;

  constructor(
    private warehouseservice: warehouseservice){}

  ngOnInit(): void {
   this.copysubscription = this.warehouseservice.getwarehousedatas().subscribe((products)=>
   {
     this.products = products;
     
   })

   this.subscription = this.warehouseservice.updatedproducts_originalobs.asObservable().subscribe((value)=>
   {
    this.copywarehouse = value
   })
  }

  searchTextname(searchtext)
  { 
    if(searchtext){
      searchtext = searchtext.toLowerCase();
      this.filterarray =  this.copywarehouse.filter( obj => {
      return obj.name.toLowerCase().includes(searchtext);
    });
    this.warehouseservice.updatedProductCopyObs.next(this.filterarray);
  }
  else
  {
    this.warehouseservice.clearfilterAndSetOrginal();
  }
 
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
  this.copysubscription.unsubscribe();
 }

}
