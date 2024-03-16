import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { WildCardComponent } from './pages/wild-card/wild-card.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'services/:id',
    component: ServicesComponent
  },
  {
    path: '**',
    component: WildCardComponent,    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64] 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
