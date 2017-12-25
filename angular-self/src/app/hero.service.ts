import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from './hero';

import 'rxjs/add/operator/toPromise';     //用于扩展Observable ,  把Observable直接转换成Promise对象
// import { HEROES } from './mock-heroes';


/*
查询所有成员：以GET方法访问api/persons
查询某个成员：以GET方法访问api/persons/id，比如id是1，那么访问api/persons/1
更新某个成员：以PUT方法访问api/persons/id
删除某个成员：以DELETE方法访问api/persons/id
增加一个成员：以POST方法访问api/persons
*/

@Injectable()
export class HeroService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private heroesUrl = 'api/heroes';

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        //return Promise.resolve(HEROES);

        return this.http.get(this.heroesUrl)   //http.get返回一个 RxJS 的Observable对象
            .toPromise()        //操作符把Observable直接转换成Promise对象
            //.then(response => response.json().data as Hero[])
            .then(response => response.json())
            .catch(this.handleError);
    }



    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    getHero(id: number): Promise<Hero> {
        // return this.getHeroes().then(heroes => heroes.find(hero => hero.id == id));

        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}
