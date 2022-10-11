import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { BobComponent } from "./about/bob/bob.component";
import { SusanComponent } from "./about/susan/susan.component";

  


const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full'},
  { path: "home", component: HomeComponent, children: [
    { path: "about", component: AboutComponent, children: [
      { path: "bob",   component: BobComponent  },
      { path: "susan", component: SusanComponent}
    ]},
    { path: "contact", component: ContactComponent, children: [
     
    ]}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRouterModule {
  
}