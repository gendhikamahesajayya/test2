import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "./login.service";
import { RouterExtensions } from "nativescript-angular/router";

import * as dialog from "tns-core-modules/ui/dialogs";

@Component({
    selector: "login",
    templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
    // dummy user untuk default value
    user: User = { username: "username", password: "password" };
    // ini adalah desain login form untuk HTML
    loginForm: FormGroup = this.fb.group({
        username: [this.user.username, [Validators.required]],
        password: [this.user.password, [Validators.required]],
    });
    //getter -> untuk mengambil value-nya di HTML
    username = this.loginForm.get("username");
    password = this.loginForm.get("password");

    constructor(
        private page: Page,
        private fb: FormBuilder,
        private ls: LoginService,
        private router: RouterExtensions
    ) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
        this.ls.isLoggedIn().then(
            (res) => {
                this.router.navigate(["/corona"], { clearHistory: true });
            },
            (err) => {
                console.log(err);
            }
        );
    }

    login() {
        this.ls.login().then(
            (result) => {
                this.router.navigate(["/corona"], { clearHistory: true });
            },
            (err) => {
                console.log(err);
                alert(
                    "login dengan Google eror, silakan gunakan akun lain atau hubungi admin"
                );
            }
        );
    }
}
