import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Warehousemodel } from 'src/app/model/warehouse.model';
import { warehouseservice } from 'src/app/service/warehouse.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit , OnDestroy{

  @ViewChild('content') Elementref;
  products: Warehousemodel[];
  filteredproducts = []
  spaceAvailable: any[];
  cluster: any[];
  city: any[];
  filteredCity = []
  filteredAvailability = []
  filteredCluster = []
  resultOfCity = []
  resultOfAvailability = []
  resultOfCluster = []
  clearbtn = false;
  private subscription: Subscription
  
  constructor(private modalService: NgbModal,private warehouseservice: warehouseservice) { }

  ngOnInit(): void {

     this.subscription =  this.warehouseservice.getwarehousedatas().subscribe((products)=>
      {
        this.products = products;
      })

 
      this.city = this.warehouseservice.getfiltercityarrays();
      this.cluster = this.warehouseservice.getfilterclusterarrays();
      this.spaceAvailable = this.warehouseservice.getfilterspacearrays();
  }

  detailClose()
  {
    this.modalService.dismissAll();
  }
  
  openFilter()
  {
    this.modalService.open(this.Elementref,{ size: 'lg',centered: true });
  }

  addCity(event: string)
  {
    this.filteredCity.push(event);
  }

  addSpaceAvailable(event: number)
  {
    this.filteredAvailability.push(event);
  }

  addCluster(event: string)
  {
    this.filteredCluster.push(event);
  }
  
  filterWarehouse()
  {
  
    if(this.filteredCity.length == 0)
    this.resultOfCity = this.products;
    else
    {
    this.filteredCity.forEach((city)=>
    { this.products.forEach((filtarray)=>
    {
       if(filtarray.city.includes(city))
       this.resultOfCity.push(filtarray);
    }) 
   })
    }
   
  if(this.filteredAvailability.length == 0)
  this.resultOfAvailability = this.resultOfCity;
  else
  {
    this.filteredAvailability.forEach((city)=>
    {
    this.resultOfCity.forEach((filtarray)=>
    {
    if(filtarray.space_available == city)
    this.resultOfAvailability.push(filtarray);
    })  
   })
  }

  if((this.filteredCluster.length == 0))
  this.resultOfCluster = this.resultOfAvailability;
  else
  {
    this.filteredCluster.forEach((city)=>
  {
    this.resultOfAvailability.forEach((filtarray)=>
    {
       if(filtarray.cluster.includes(city))
       this.resultOfCluster.push(filtarray);
    })

  })  
 }
  this.warehouseservice.updatedProductCopyObs.next(this.resultOfCluster);
  this.clearbtn = true;  
  this.modalService.dismissAll();
  }

  clearFilter()
  {
    this.warehouseservice.clearfilterAndSetOrginal();
    this.filteredCity = []
    this.filteredAvailability = []
    this.filteredCluster = []
    this.resultOfCity = []
    this.resultOfAvailability = []
    this.resultOfCluster = []
    this.clearbtn =false
  }

  filterCancel()
  {
    this.filteredCity = []
    this.filteredAvailability = []
    this.filteredCluster = []
    this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
   }

  }



