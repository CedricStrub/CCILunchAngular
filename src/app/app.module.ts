import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";
import { NgModule } from "@angular/core";
import { AccueilModule } from "./accueil/accueil.module";
import { MenuJourModule } from "./menu-jour/menu-jour.module";
import { MenuSemaineModule } from "./menu-semaine/menu-semaine.module";
import { AuthModule } from "./auth/auth.module";
import { WorkerModule } from "./worker/worker.module";
import { AdminModule } from "./admin/admin.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        AccueilModule,
        MenuJourModule,
        MenuSemaineModule,
        AuthModule,
        WorkerModule,
        AdminModule,
    ]
})
  export class AppModule { 
   }
  