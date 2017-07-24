import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';


@Injectable()
export class HttpService {

  constructor(
    private http: Http,
    private Response: Response
  ) { }
}
