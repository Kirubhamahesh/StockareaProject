
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageoneComponent } from './pages/pageone/pageone.component';
import { WarehousedetailComponent } from './components/warehousedetail/warehousedetail.component';
import { AddcomponenetComponent } from './components/addcomponenet/addcomponenet.component';
import { PagethreeComponent } from './pages/pagethree/pagethree.component';



const appRoutes: Routes = [
 
  // { path: '', redirectTo: 'pageone', pathMatch:'full' },
  { path: '',component:PageoneComponent },
   { path: 'detail/:id',component:WarehousedetailComponent },
   { path: 'home',component:PageoneComponent },
   { path: 'addwarehouse',component:PagethreeComponent },
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
}) 

export class AppRoutingModule { }
