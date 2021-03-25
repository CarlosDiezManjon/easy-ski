import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "calendar", component: CalendarioComponent
  },
  {
    path: "search", component: SearchComponent
  },
  {
    path: "settings", component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
