import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {OverviewComponent} from "./overview/overview.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {path: "", component: WelcomePageComponent},
  {path: "overview", component: OverviewComponent},
  {path: "list", component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
