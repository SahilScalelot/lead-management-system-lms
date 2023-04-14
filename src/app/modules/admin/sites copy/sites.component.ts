import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { CONSTANTS } from 'app/layout/common/constants';
import { GlobalFunctions } from 'app/layout/common/global-functions';

import * as _ from 'lodash';

@Component({
  selector: 'sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss'],
  animations: fuseAnimations,
})
export class SitesComponent implements OnInit {

  isLoading: boolean = false;
  constants: any = CONSTANTS;

  constructor(
    private _globalFunctions: GlobalFunctions,
    private _fuseConfirmationService: FuseConfirmationService,
  ) { }

  ngOnInit(): void {
    
  }

}