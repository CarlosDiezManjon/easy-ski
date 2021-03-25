import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  snackBarRef: MatSnackBarRef<any>;
  snackBarConfig: MatSnackBarConfig;
  snackBarAutoHide = 5000;

  constructor(private snackBar: MatSnackBar) { }

  openSnackBarError(mensaje, duracion = undefined) {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.duration = duracion == 'infinite' ? undefined : this.snackBarAutoHide;
    this.snackBarConfig.duration = duracion ? duracion : this.snackBarAutoHide;
    this.snackBarConfig.panelClass = 'snackError';
    this.snackBarRef = this.snackBar.open(mensaje, 'x', this.snackBarConfig);
  }

  openSnackBarInfo(mensaje, duracion = undefined) {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.duration = duracion ? duracion : this.snackBarAutoHide;
    this.snackBarConfig.panelClass = 'snackInfo';
    this.snackBarRef = this.snackBar.open(mensaje, 'x', this.snackBarConfig);
  }

  openSnackBarSuccess(mensaje, duracion = undefined) {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.duration = duracion ? duracion : this.snackBarAutoHide;
    this.snackBarConfig.panelClass = 'snackSuccess';
    this.snackBarRef = this.snackBar.open(mensaje, 'x', this.snackBarConfig);
  }

}