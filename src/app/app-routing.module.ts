import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HeroComponent } from "./heroes/hero.component";
import { HeroDetailComponent } from "./heroes/hero-detail.component";
import { LoginComponent } from "./login/login.component";
import { ShellComponent } from "./shell/shell.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    // shell component akan membungkus semua halaman yang menggunakan sidedrawer
    {
        path: "",
        component: ShellComponent,
        children: [
            { path: "hero", component: HeroComponent },
            { path: "hero/:name", component: HeroDetailComponent },
            { path: "about", component: AboutComponent },
        ],
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
