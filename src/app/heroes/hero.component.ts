import { Component, OnInit } from "@angular/core";

import { HeroService } from "./hero.service";
import { BehaviorSubject } from "rxjs";

@Component({
    selector: "ns-items",
    templateUrl: "./hero.component.html",
})
export class HeroComponent implements OnInit {
    $heroes: BehaviorSubject<Array<any>>;
    heroes = [];
    idxstart = 0;

    constructor(private cs: HeroService) {
        this.$heroes = new BehaviorSubject([]);
    }

    ngOnInit(): void {
        this.cs.getHeroes().subscribe(
            (response: any) => {
                this.heroes.push(...response);
                this.$heroes.next(this.heroes);
                //console.log(this.coronas);
            },
            (err) => console.log(err)
        );
    }

    loadMore() {
        console.log("called");
        if (this.heroes.length <= 0) return;
        this.idxstart += 20;
        this.cs.getHeroes(this.idxstart).subscribe((response: any) => {
            if (response) {
                this.heroes.push(...response);
                this.$heroes.next(this.heroes);
                //console.log(this.coronas);
            }
        });
    }
}
