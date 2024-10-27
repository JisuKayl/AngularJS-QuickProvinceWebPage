import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent} from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AttractionComponent } from './attraction/attraction.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'attraction', component: AttractionComponent},
  {path: 'products', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
