import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { Plate } from './plate.model';

@Injectable({ providedIn: 'root' })
export class PlateService {
  private plates: Plate[] = [];
  private plateUpdated = new Subject<Plate[]>();

  constructor(private httpClient: HttpClient, private router: Router) {}

  getPlate() {
    this.httpClient
      .get<{ message: string; plates: Plate[] }>(
        'http://localhost:3000/api/plates'
      )
      .subscribe((plateData) => {
        this.plates = plateData.plates;
        this.plateUpdated.next([...this.plates]);
      });
  }

  getPlateId(id: string) {
    return this.httpClient.get<{
      _id: string;
      number: string;
      fname: string;
      lname: string;
    }>('http://localhost:3000/api/plates/' + id);
  }

  //returns an object that we can listen to, but cant emit
  getPlateUpdateListener() {
    return this.plateUpdated.asObservable();
  }

  addPlate(number: string, fname: string, lname: string) {
    const plate: Plate = {
      _id: null,
      number: number,
      fname: fname,
      lname: lname,
    };
    this.httpClient
      .post<{ message: string; plateId: string }>(
        'http://localhost:3000/api/plates',
        plate
      )
      .subscribe((responseData) => {
        const plateId = responseData.plateId;
        plate._id = plateId;
        this.plates.push(plate);
        this.plateUpdated.next([...this.plates]);
        this.router.navigate(["/"]);
      });
  }

  updatePlate(id: string, number: string, fname: string, lname: string) {
    const plate: Plate = {
      _id: id,
      number: number,
      fname: fname,
      lname: lname,
    };
    this.httpClient
      .put('http://localhost:3000/api/plates/' + id, plate)
      .subscribe((response) => {
        this.router.navigate(["/"]);
      });
  }

  deletePlate(plateId: string) {
    this.httpClient
      .delete('http://localhost:3000/api/plates/' + plateId)
      .subscribe(() => {
        const updatedPlates = this.plates.filter(
          (plate) => plate._id !== plateId
        );
        this.plates = updatedPlates;
        this.plateUpdated.next([...this.plates]);
      });
  }
}
