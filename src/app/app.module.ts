import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//angular material
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LayoutModule} from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
//primeng
import {TreeModule} from 'primeng/tree';
import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';

import {ButtonModule} from 'primeng/button';
//ours
import { HeaderComponent } from './components/core/header/header.component';
import { SidenavComponent } from './components/core/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { MyPawComponent } from './components/my-paw/my-paw.component';
import { StatusComponent } from './components/status/status.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    MyPawComponent,
    StatusComponent,
    RankingComponent,
    ContactComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LayoutModule,
    MatIconModule,
    TreeModule,
    MatTreeModule,
    CarouselModule,
    InputTextModule,
    ButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
