import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor() {
        if (localStorage.getItem('currentUser')) {
            // logged in then return true
            return true;
        }

        // no logged in then redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}