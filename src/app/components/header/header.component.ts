import { Component } from '@angular/core';
import { warehouseservice } from 'src/app/service/warehouse.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {


  addbtn=true
  constructor(
    private warehouseservice: warehouseservice,
    private router: ActivatedRoute,
    private route: Router
    ) {}

  ngOnInit(): void {
     this.warehouseservice.getsubscribe().subscribe((value)=>
      {
        this.addbtn = value;
       })
    }

  newwarehouse()
  {
    this.warehouseservice.addwarehouse(false);
    this.route.navigate([ '/addwarehouse'],{relativeTo: this.router});
  }

  gotohome()
  {
    this.warehouseservice.addwarehouse(true);
  }
  
}

