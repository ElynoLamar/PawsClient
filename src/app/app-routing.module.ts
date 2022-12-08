import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MyPawComponent } from './components/my-paw/my-paw.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ShopComponent } from './components/shop/shop.component';
import { StatusComponent } from './components/status/status.component';

const routes: Routes = [
  { path: '*', redirectTo: '', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'mypaw', component: MyPawComponent, },
  { path: 'status', component: StatusComponent, },
  { path: 'ranking', component: RankingComponent, },
  { path: 'shop', component: ShopComponent, },
  { path: 'contact', component: ContactComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
