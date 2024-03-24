import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { AboutComponent } from './components/about/about.component';
import { TestymonialsComponent } from './components/testymonials/testymonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: "", component: HomeComponent, title: "/Home" },
  { path: "Home", component: HomeComponent, title: "/Home" },
  { path: "Work", component: WorkComponent, title: "/Work" },
  { path: "Recipes", component: RecipesComponent, title: "/Recipes" },
  { path: "About", component: AboutComponent, title: "/About" },
  { path: "Testymonials", component: TestymonialsComponent, title: "/Testymonials" },
  { path: "Contact", component: ContactComponent, title: "/Contact" },
  { path: "**", component: NotfoundComponent, title: "/error" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
