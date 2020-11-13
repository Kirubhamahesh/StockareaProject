import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchComponent } from './components/search/search.component';
import { PageoneComponent } from './pages/pageone/pageone.component';
import { PagetwoComponent } from './pages/pagetwo/pagetwo.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { warehouseservice } from './service/warehouse.service';
import { WarehousedetailComponent } from './components/warehousedetail/warehousedetail.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagethreeComponent } from './pages/pagethree/pagethree.component';
import { AddcomponenetComponent } from './components/addcomponenet/addcomponenet.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FilterComponent,
    SearchComponent,
    PageoneComponent,
    PagetwoComponent,
    HeaderComponent,
    WarehousedetailComponent,
    AddcomponenetComponent,
    PagethreeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
    
  ],
  exports: [AppRoutingModule],
  providers: [warehouseservice,NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
