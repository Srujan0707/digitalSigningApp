import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FooterComponent } from './components/footer/footer.component';
import { DigitalSignaturesComponent } from './components/digital-signatures/digital-signatures.component';


const routes: Routes = [
              {path:'',                 component:LoginComponent},
              {path:'home',             component: HomeComponent},
              {path:'navbar',           component:NavbarComponent},
              {path:'contactus',        component:ContactusComponent},
              {path:'logout',           component:LogoutComponent},
              {path:'footer',           component:FooterComponent},
              {path:'digitalSingatures', component:DigitalSignaturesComponent},
              {path:'**',               component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
