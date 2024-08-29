import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingComponent } from './app-routing.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from '../news/news.component';
import { NewsDetailsComponent } from '../newsDetails/newsDetails.component';


const routes: Routes = [
  { path: 'home', component: NewsComponent },
  { path: 'home/:title', component: NewsDetailsComponent},
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: [AppRoutingComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
