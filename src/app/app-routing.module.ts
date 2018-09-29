import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './pages/team/team.component';
import { InfoComponent } from './pages/info/info.component';
import { SchemaComponent } from './pages/schema/schema.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'team', component: TeamComponent },
  { path: 'info', component: InfoComponent },
  { path: 'schema', component: SchemaComponent },
  {
    path: '',
    redirectTo: '/map',
    pathMatch: 'full'
  },
  { path: '**', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
