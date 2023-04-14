import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { CONSTANTS } from 'app/layout/common/constants';
import { GlobalFunctions } from 'app/layout/common/global-functions';

import * as _ from 'lodash';
import { SitesService } from './sites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss'],
  animations: fuseAnimations,
})
export class SitesComponent implements OnInit {

  isLoading: boolean = false;
  constants: any = CONSTANTS;
  sites: any = [];
  filterObj: any = {};

  constructor(
    private _siteService: SitesService,
    private _globalFunctions: GlobalFunctions,
    private _fuseConfirmationService: FuseConfirmationService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.filterObj = {
      page: 1,
      limit: 10,
      search: ""
    };
    this.getSites();
  }

  addSite(): void {
    this._router.navigate(['/admin/sites/create']);
  }

  getSites(): void {
    this.isLoading = true;
    this._siteService.getSites(this.filterObj).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.sites = result.Data.docs;
        console.log(this.sites);
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