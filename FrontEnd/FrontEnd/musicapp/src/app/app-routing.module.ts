import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { Dashboard1Component } from './component/dashboard1/dashboard1.component';
import { FavouritecomponentComponent } from './component/favouritecomponent/favouritecomponent.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { MovieInfoComponent } from './component/movie-info/movie-info.component';
import { RecommedationComponent } from './component/recommedation/recommedation.component';
import { Recommended1Component } from './component/recommended1/recommended1.component';
import { RegisterComponent } from './component/register/register.component';
import { SearchItemsComponent } from './component/search-items/search-items.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: "auth",
    component: SidebarComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      }
    ]
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "home",
        component: Dashboard1Component
      },
      {
        path: "search-items/:text",
        component: SearchItemsComponent
      },
      {
        path: "recommended",
         canActivate: [AuthGuard],
        component: RecommedationComponent
      },
      // {
      //   path: "recommended",
      //    canActivate: [AuthGuard],
      //   component: Recommended1Component
      // },
      //  {
      //   path: "movie-info",
      //    canActivate: [AuthGuard],
      //   component: MovieInfoComponent
      // },
      {path: "movie-details/:id",
    canActivate: [AuthGuard],
  component:  MovieDetailsComponent},
      {
        path: "favourite",
        canActivate: [AuthGuard],
        component: FavouritecomponentComponent
      }
    ]
  },
  {
    path: "",
    redirectTo: "dashboard/home",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
