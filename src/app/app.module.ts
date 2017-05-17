import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// mock backend
import { mockBackendProvider } from "./helpers/mock-backend";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { BaseRequestOptions } from "@angular/http";

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from "./services/authentication.service";
import { UserService } from "./services/user.service";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,

    // mock backend
    mockBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
