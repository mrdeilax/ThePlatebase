import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { Plate } from '../plate.model';
import { PlateService } from '../plate.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component'

@Component({
  selector: 'app-plate-show',
  templateUrl: './plate-show.component.html',
  styleUrls: ['./plate-show.component.css']
})
export class PlateShowComponent implements OnInit, OnDestroy {
  isLoading = false;
  plates: Plate[] = [];
  private plateSub: Subscription;


  constructor(public plateService: PlateService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.plateService.getPlate();
    this.plateSub = this.plateService.getPlateUpdateListener()
      .subscribe((plates: Plate[]) => {
        this.isLoading = false;
        this.plates = plates;
      });
  }

  ngOnDestroy(){
    this.plateSub.unsubscribe();
  }



  onDeleteConfirm(plateId){
    this.dialog.open(ConfirmDialogComponent,{ data: {id: plateId}})
  }

} 