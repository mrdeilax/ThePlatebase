import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { Plate } from './plate.model';

@Injectable({ providedIn: 'root' })
export class PlateService {
  private plates: Plate[] = [];
  private plateUpdated = new Subject<{plates: Plate[]; plateCount: number}>();

  constructor(private httpClient: HttpClient, private router: Router) {}

  getPlate(platesPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${platesPerPage}&page=${currentPage}`;
    this.httpClient
      .get<{ message: string; plates: Plate[], maxPlates: number }>(
        'http://localhost:3000/api/plates' + queryParams
      )
      .subscribe((plateData) => {
        this.plates = plateData.plates;
        this.plateUpdated.next({plates: [...this.plates], plateCount: plateData.maxPlates});
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
    return this.httpClient
      .delete('http://localhost:3000/api/plates/' + plateId);
  }
}
