import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { warehouseservice } from 'src/app/service/warehouse.service';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Warehousemodel } from 'src/app/model/warehouse.model';


@Component({
  selector: 'app-warehousedetail',
  templateUrl: './warehousedetail.component.html',
  styleUrls: ['./warehousedetail.component.css']
})
export class WarehousedetailComponent implements OnInit , OnInit{

 
  products: Warehousemodel[];
  addform = false;
  registered = 'none'
  live = 'none'
  private subscription: Subscription;
  id: number
  detailedobj: any
  warehouseForm: FormGroup;
  
  constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private warehouseservice: warehouseservice){}

  ngOnInit(): void {

    this.subscription = this.route.params.subscribe((params: Params)=>
    {
     this.id = +params['id'];
    })
    this.detailedobj = this.warehouseservice.getwarehousedatabyid(this.id);

    this.warehouseForm = this.formBuilder.group({
      name: ["", Validators.required],
      code: ["", Validators.required],
      city: ["", Validators.required],
      type: ["", Validators.required],
      space_available: ["", Validators.required],
      cluster: ["", Validators.required],
      is_registered: ["", Validators.required],
      is_live: ["", Validators.required],    
    });

    this.warehouseForm.patchValue(this.detailedobj);
  }

  onSave() {
   this.warehouseservice.updatewarehouse(this.id,this.warehouseForm.value)
   this.warehouseservice.addwarehouseobj.next(true);
   this.router.navigate(['/home']);
   }

   ngOnDestroy(): void {
     this.subscription.unsubscribe();
     
   }

}
