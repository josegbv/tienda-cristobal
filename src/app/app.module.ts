import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagoComponent } from './pago/pago.component';
import { ProductosComponent } from './productos/productos.component';


const routes: Routes = [{
    path:'',
    component: LoginComponent
},
{
    path:'productos',
    component: ProductosComponent
},
{
    path:'pago',
    component: PagoComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagoComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
