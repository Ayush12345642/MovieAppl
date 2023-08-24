// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
// import { LoginComponent } from './component/login/login.component';
// import { RegisterComponent } from './component/register/register.component';
// import { HomeComponent } from './component/home/home.component';
// import { DashboardComponent } from './component/dashboard/dashboard.component';
// import { FavouritecomponentComponent } from './component/favouritecomponent/favouritecomponent.component';
// import { RecommedationComponent } from './component/recommedation/recommedation.component';
// import { SearchItemsComponent } from './component/search-items/search-items.component';
// import { MovieInfoComponent } from './component/movie-info/movie-info.component';
// import { SidebarComponent } from './component/sidebar/sidebar.component';
// import { CardsComponent } from './component/cards/cards.component';
// import {MatSelectModule} from '@angular/material/select';
// import { LayoutModule } from '@angular/cdk/layout';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import { YouTubePlayerModule } from '@angular/youtube-player';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatGridListModule } from '@angular/material/grid-list';
// import {MatCardModule} from '@angular/material/card';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CardsComponent } from './component/cards/cards.component';
import { MovieInfoComponent } from './component/movie-info/movie-info.component';
import { SearchItemsComponent } from './component/search-items/search-items.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RecommedationComponent } from './component/recommedation/recommedation.component';
import { FavouritecomponentComponent } from './component/favouritecomponent/favouritecomponent.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { Dashboard1Component } from './component/dashboard1/dashboard1.component';
import { Recommended1Component } from './component/recommended1/recommended1.component';
import { Register1Component } from './component/register1/register1.component';
import { Login1Component } from './component/login1/login1.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    FavouritecomponentComponent,
    RecommedationComponent,
    SearchItemsComponent,
    MovieInfoComponent,
    SidebarComponent,
    CardsComponent,
    MovieDetailsComponent,
    Dashboard1Component,
    Recommended1Component,
    Register1Component,
    Login1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    LayoutModule,
    MatMenuModule,
    MatButtonModule,
   MatGridListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatTooltipModule,
    YouTubePlayerModule,
    FlexLayoutModule,
    HttpClientJsonpModule,
    MatSnackBarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
