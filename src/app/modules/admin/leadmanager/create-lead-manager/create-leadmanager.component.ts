import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { CONSTANTS } from 'app/layout/common/constants';
import { GlobalFunctions } from 'app/layout/common/global-functions';

import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { LeadManagerService } from '../leadmanager.service';

@Component({
  selector: 'create-leadmanager',
  templateUrl: './create-leadmanager.component.html',
  // styleUrls: ['./leadmanager.component.scss'],
  animations: fuseAnimations,
})
export class CreateLeadManagerComponent implements OnInit {

  isLoading: boolean = false;
  constants: any = CONSTANTS;

  sitesArr: any = {};
  agentArr: any = {};

  createLeadManagerObj: any = {
    userid: '',
    country_code: '+91',
    status: true,
  };

  /**
   * Constructor
   */
  constructor(
    private _leadManagerService: LeadManagerService,
    private _globalFunctions: GlobalFunctions,

    private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.getSite();
  }

  getSite(): any {
    this.isLoading = true;
    this._leadManagerService.getSites().subscribe((result: any) => {
      console.log(result);
      if (result && result.IsSuccess) {
        this.sitesArr = result.Data;
      } else {
        this._globalFunctions.successErrorHandling(result, this, true);
      }
      this.isLoading = false;
    }, (error: any) => {
      this._globalFunctions.errorHanding(error, this, true);
      this.isLoading = false;
    });
    this._leadManagerService.getAllAgents().subscribe((result: any) => {
      console.log(result);
      if (result && result.IsSuccess) {
        this.agentArr = result.Data;
      } else {
        this._globalFunctions.successErrorHandling(result, this, true);
      }
      this.isLoading = false;
    }, (error: any) => {
      this._globalFunctions.errorHanding(error, this, true);
      this.isLoading = false;
    });
  }

  createLeadManager(): any {
    console.log(this.createLeadManagerObj);
    this.isLoading = true;
    this._leadManagerService.createLeadManager(this.createLeadManagerObj).subscribe((result: any) => {
      console.log(result);
      if (result && result.IsSuccess) {
        console.log(result);
        // this.products = result.Data.docs;
        // console.log(this.products);
        // const pagination: any = this._globalFunctions.copyObject(result.Data);
        // delete pagination.docs;
        // this.pagination = pagination;
      } else {
        this._globalFunctions.successErrorHandling(result, this, true);
      }
      this.isLoading = false;
    }, (error: any) => {
      this._globalFunctions.errorHanding(error, this, true);
      this.isLoading = false;
    });
  }
}