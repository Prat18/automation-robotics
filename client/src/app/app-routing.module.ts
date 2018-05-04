import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from '../../src/app/components/navbar/navbar.component';
import { LoginComponent } from '../../src/app/components/login/login.component';
import { ProductiondataComponent } from '../../src/app/components/productiondata/productiondata.component';
import { HomeComponent } from '../../src/app/components/home/home.component'

const AppRoutes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'login', component: LoginComponent},
    {path: 'data', component: ProductiondataComponent},
    {path: '', component: HomeComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(AppRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
