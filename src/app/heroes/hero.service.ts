import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: "root",
})

export class HeroService {
    baseUrl = `https://api.opendota.com/api/heroes`;


    constructor(private http: HttpClient) {}

    getHeroes(idxstart = 0) {
        if (idxstart) {
            return this.http.get(`${this.baseUrl}/heroes?offset=${idxstart}`);
        }
        return this.http.get(`${this.baseUrl}/heroes`);
    }

    getHero(country: string) {
        return this.http.get(`${this.baseUrl}/heroes/${country}`);
    }

}

