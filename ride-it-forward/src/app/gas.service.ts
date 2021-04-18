import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class GasService {

    constructor(private http: HttpClient) { }

onFetchPrice() {
    //https://api.collectapi.com/gasPrice/stateUsaPrice?state=WA
    fetch("https://gas-price.p.rapidapi.com/usaCitiesList", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "bd7fa3c605mshaf7fb7292d5e30fp1e202cjsnc9e1d9c04509",
		"x-rapidapi-host": "gas-price.p.rapidapi.com/json"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}

onFetchState(){
	fetch("https://gas-price.p.rapidapi.com/stateUsaPrice?state=WA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "bd7fa3c605mshaf7fb7292d5e30fp1e202cjsnc9e1d9c04509",
		"x-rapidapi-host": "gas-price.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}

}