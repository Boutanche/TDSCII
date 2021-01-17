import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteComponent } from './pages/site/site.component';
import { GameComponent } from './pages/game/game.component';

const routes: Routes = [
  {path: 'home',      component:SiteComponent},
  {path: 'game',      component:GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
