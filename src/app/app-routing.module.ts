import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductLiComponent } from './product-li/product-li.component'; 


const routes: Routes = [
  {
    path: "" , component: HomeComponent
  },
  {
    path: "product-li", component: ProductLiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
