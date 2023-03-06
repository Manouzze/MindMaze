import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagecardsComponent } from './pagecards/pagecards.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: PagecardsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
