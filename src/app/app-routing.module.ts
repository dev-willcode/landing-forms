import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { EmojiPipe } from './customPipe/emoji.pipe';
import { LandingComponent } from './pages/landing/landing.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    RegisterComponent,
    LandingComponent,
    PipesComponent,
    HeaderComponent,
    EmojiPipe,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
