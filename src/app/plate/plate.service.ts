import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Plate } from './plate.model';

@Injectable({providedIn: 'root'})
export class PlateService {
    private plates: Plate[] = [];
    private plateUpdated = new Subject<Plate[]>();

    getPlate() {
        return [...this.plates];
    }

    //returns an object that we can listen to, but cant emit
    getPlateUpdateListener(){
        return this.plateUpdated.asObservable()
    }

    addPlate(number: string, fname: string, lname: string) {
        const plate: Plate = {number: number, fname: fname, lname: lname}
        this.plates.push(plate);
        this.plateUpdated.next([...this.plates]);
    }
}