import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalFunctions } from 'app/layout/common/global-functions';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeadManagerService {

  constructor(private http: HttpClient,private _globalFunctions: GlobalFunctions) { }
  
  getAgents(filter: any = {}): any {
    return this.http.post(environment.appURL + 'agents', filter, this._globalFunctions.getFileAuthorizationHeader());
  }

  createLeadManager(leadManagerObj: any = ''): any {
    return this.http.post(environment.appURL + 'users/save', leadManagerObj, this._globalFunctions.getAuthorizationHeader());
  }

}
