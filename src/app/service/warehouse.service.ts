import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription, Subject, BehaviorSubject } from 'rxjs';
import data from '../../assets/warehouses.json';
import { Warehousemodel } from '../model/warehouse.model.js';
@Injectable()
export class warehouseservice
{
    productsCopy: Warehousemodel[];
    addwarehouseobj = new BehaviorSubject<boolean>(true);
    updatedProductCopyObs = new BehaviorSubject<Warehousemodel[]>(null);
    updatedproducts_originalobs = new BehaviorSubject<Warehousemodel[]>(null);
    spaceAvailable = [];
    cluster = [];
    city = [];
 
   
    constructor(private httpClient: HttpClient,private router: Router,private route: ActivatedRoute){
       this.productsCopy = data;
       this.updatedproducts_originalobs.next(data);
       this.updatedProductCopyObs.next(data);
    }

    getwarehousedatas()
    {
        return this.updatedProductCopyObs.asObservable();
    }

    getwarehousedatabyid(id: number)
    {
        return this.productsCopy[id-1];
    }

    savewarehouse(obj: Warehousemodel)
    {
        obj.id = this.productsCopy.length + 1
        this.productsCopy.push(obj);
        this.updatedProductCopyObs.next(this.productsCopy);
        this.updatedproducts_originalobs.next(this.productsCopy);
    }
    updatewarehouse(index:number,obj: Warehousemodel)
    {
        obj.id = index;
        this.productsCopy[index-1] = obj;
        this.updatedProductCopyObs.next(this.productsCopy);
        this.updatedproducts_originalobs.next(this.productsCopy);
    }

    removeduplicate(data)
  {
    return [... new Set(data)];
  }

    getfiltercityarrays()
    {
        for(let i=0 ; i<this.productsCopy.length; i++)
            {
              this.city.push(this.productsCopy[i].city.toString())  }
      return  this.removeduplicate(this.city).slice(0,5);}


    getfilterspacearrays()
            {
    return  this.spaceAvailable = [124,134,98,97,3456]
}


    getfilterclusterarrays()
    {
        for(let i=0 ; i<this.productsCopy.length; i++)
        {
          this.cluster.push(this.productsCopy[i].cluster.toString())    
    } 
    return  this.removeduplicate(this.cluster).slice(0,5);}

    clearfilterAndSetOrginal()
    {
    
        this.updatedproducts_originalobs.asObservable().subscribe((value)=>
        {
            this.productsCopy = [...value];
        })
       this.updatedProductCopyObs.next(this.productsCopy);
    }

    addwarehouse(value: boolean)
    {
        this.addwarehouseobj.next(value)
    }

    getsubscribe()
    {
        return this.addwarehouseobj.asObservable();
    }
}