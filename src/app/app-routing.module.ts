import { FactureModulesModule } from './facture-modules/facture-modules.module';

import { FactureComponent } from './facture/facture.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './home/layout/layout.component';
import { DetailProduit } from './models/DetailProduit';

import { ChartsComponent } from './charts/charts.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ListeProduitadminComponent } from './liste-produitadmin/liste-produitadmin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: LayoutComponent },
      {path:'facture', loadChildren: 
()=>import('./facture-modules/facture-modules.module').then(m=>m.FactureModulesModule)} ,
     // { path: 'facture', component: FactureComponent },
    //  { path: 'detailfacture/:idfacture', component: DetailFactureComponent },
      { path: 'listProduit', component: ProduitListComponent },
      
      { path: 'listProduitAdmin', component:ListeProduitadminComponent  },
      {
        path:'produitdetail/:idProduit',
        component:DetailProduit
      },
      {
        path:'stats',
        component:ChartsComponent
      },

      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
