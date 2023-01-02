import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//angular material
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//primeng
import { TreeModule } from 'primeng/tree';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
//ours
import { HeaderComponent } from './components/core/header/header.component';
import { SidenavComponent } from './components/core/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { MyPawComponent } from './components/my-paw/my-paw.component';
import { StatusComponent } from './components/status/status.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { StoryComponent } from './components/story/story.component';
import { RequestService } from './services/request.service';
import { PersistentService } from './services/persistence.service';

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
    ShopComponent,
    StoryComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
    DropdownModule,
    DialogModule,
    ProgressBarModule,

  ],
  providers: [RequestService, PersistentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
