import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }
  getInfo (repo: string) {
    return this.httpClient.get('https://api.github.com/users/'+ repo+'/repos?access_token=' + environment.gitApiKey)
    }
  
    getUsers (repo: string) {
    return this.httpClient.get('https://api.github.com/users/'+repo+'?access_token=' + environment.gitApiKey)
    }
}
