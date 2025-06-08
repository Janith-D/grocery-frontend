import { Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';



export const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent,
      },
      {
        path:'admin',
        component:AdminComponent,
      }
    ]
  },
  {
    path:'',
    redirectTo:'login',
  }
];
