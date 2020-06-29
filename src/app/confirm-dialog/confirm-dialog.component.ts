import { Component, OnInit, Inject } from '@angular/core';

import { PlateService } from '../plate/plate.service';

import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Plate } from '../plate/plate.model';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  constructor(public plateService: PlateService, @Inject(MAT_DIALOG_DATA) public data: any){}
  onDelete(plateId: string){
    this.plateService.deletePlate(plateId);
  }

  ngOnInit(){
    console.log(this.data);
  }
}



