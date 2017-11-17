import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http ,Response} from '@angular/http';
import {Promotion} from '../../shared/promotion';
import {baseURL} from '../../shared/baseurl';
import {ProcessHttpmsgProvider} from '../process-httpmsg/process-httpmsg';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the PromotionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PromotionProvider {
  constructor(public http: Http,
    private processHttpmsgService:ProcessHttpmsgProvider ) {
    console.log('Hello PromotionProvider Provider');
  }



  getPromotions(): Observable<Promotion[]>{

    return this.http.get(baseURL + 'promotions')
      .map(res => {return this.processHttpmsgService.extractData(res);})
      .catch(error => {return this.processHttpmsgService.handleError(error);});

  }


  getPromotion(id:number):Observable<Promotion>{


    return this.http.get(baseURL + 'promotions/' + id)
    .map(res => {return this.processHttpmsgService.extractData(res);})
    .catch(error => {return this.processHttpmsgService.handleError(error);});




  }

  getFeaturedPromotion():Observable<Promotion>{


    return this.http.get(baseURL + 'promotions?featured=true')
    .map(res => {return this.processHttpmsgService.extractData(res)[0];})
    .catch(error => {return this.processHttpmsgService.handleError(error);});

  }


}
