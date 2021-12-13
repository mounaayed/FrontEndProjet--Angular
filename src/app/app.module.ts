import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidbarComponent } from './home/sidbar/sidbar.component';
import { LayoutComponent } from './home/layout/layout.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FactureComponent } from './facture/facture.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ListeProduitadminComponent } from './liste-produitadmin/liste-produitadmin.component';
import { ModalModule } from 'ngx-modal-bootstrap';
import { ProduitPipe } from './rechercherproduit/produit.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsComponent } from './charts/charts.component';
//import {ModalModule} from 'ngx-bootstrap/modal';
//import {ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SidbarComponent,
    LayoutComponent,
   
    ProduitListComponent,
         DetailProduitComponent,
         ListeProduitadminComponent,
         ProduitPipe,
         ChartsComponent
    
    
    
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    NgxPaginationModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
