import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { HeroService } from "./hero.service";

@Component({
    selector: "ns-details",
    templateUrl: "./hero-detail.component.html",
})
export class HeroDetailComponent implements OnInit {
    hero;
    name;

    constructor(private cs: HeroService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.name = this.route.snapshot.params.country;
        this.cs.getHero(this.name).subscribe((response: any) => {
            this.hero = response;
        });
    }
}
