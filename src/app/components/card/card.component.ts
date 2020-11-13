import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { warehouseservice } from 'src/app/service/warehouse.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  products: any[];
  private subscription: Subscription;

  constructor(
  private warehouseservice: warehouseservice){}

  ngOnInit(): void {
   
    this.subscription = this.warehouseservice.updatedProductCopyObs.subscribe((products)=>
    {
     this.products = products;
    })
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

}

  

