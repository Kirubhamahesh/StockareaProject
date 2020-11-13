import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { warehouseservice } from 'src/app/service/warehouse.service';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Warehousemodel } from 'src/app/model/warehouse.model';
@Component({
  selector: 'app-addcomponenet',
  templateUrl: './addcomponenet.component.html',
  styleUrls: ['./addcomponenet.component.css']
})
export class AddcomponenetComponent implements OnInit {


 
  products: Warehousemodel[];
  id: number
  detailedobj: any
  warehouseForm: FormGroup;

    constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private warehouseservice: warehouseservice){}
  
  ngOnInit(): void {
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
  }

  onSave() {
    this.warehouseservice.savewarehouse(this.warehouseForm.value)
    this.warehouseservice.addwarehouseobj.next(true);
    this.router.navigate(['/home']); 
}

}


