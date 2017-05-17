import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./guards/auth.guard";

const appRoutes: Routes = [
 //   { path: 'login', component: },
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);