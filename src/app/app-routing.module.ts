import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from 'src/core/body/body.component';
import { LoginComponent } from 'src/core/login/login.component';
import { ProfileComponent } from 'src/core/profile/profile.component'
import { NotFoundComponent } from 'src/core/not-found/not-found.component'
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'dashboard', component: BodyComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
   { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
