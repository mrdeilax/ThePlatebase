import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

import { PlateService } from '../plate.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Plate } from '../plate.model';

@Component({
  selector: 'app-plate-add',
  templateUrl: './plate-add.component.html',
  styleUrls: ['./plate-add.component.css'],
})
export class PlateAddComponent implements OnInit {
  private mode = 'create';
  private plateId: string;
  plate: Plate;
  isLoading = false;

  constructor(
    public plateService: PlateService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('plateId')) {
        this.mode = 'edit';
        this.plateId = paramMap.get('plateId');
        this.isLoading = true;
        this.plateService.getPlateId(this.plateId).subscribe((plateData) => {
          this.isLoading = false;
          this.plate = {
            _id: plateData._id,
            number: plateData.number,
            fname: plateData.fname,
            lname: plateData.lname,
          };
        });
      } else {
        this.mode = 'create';
        this.plateId = null;
      }
    });
  }

  onSavePlate(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.plateService.addPlate(
        form.value.plateNumber,
        form.value.plateFname,
        form.value.plateLname
      );
    } else {
      this.plateService.updatePlate(
        this.plateId,
        form.value.plateNumber,
        form.value.plateFname,
        form.value.plateLname
      );
    }
    form.resetForm();
  }
}


// function plateNumberValidator(control: FormControl){
//     let plateNum = control.value;
//     if(plateNum && /^[a-zA-Z]+$/.test(plateNum.substr(0,3)) && /^\d+$/.test(plateNum.substr(3,6))){
      
//     }
// }