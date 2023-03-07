import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagecardsComponent } from './components/pagecards/pagecards.component';
import { HomeComponent } from './components/homepage/home.component';

const routes: Routes = [
  { path: '', component: PagecardsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
