import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);