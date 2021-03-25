import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ExceptionService {

  mapaExcepciones = new Map();

  constructor(
    private snackBarService: SnackBarService
  ) { }

  getMensajeError(errorObj: any) {
    // this.mapearExcepciones();
    // if (errorObj.status === 400 && errorObj.error && errorObj.error.errors) {
    //   return [this.generarError(errorObj.error.errors)];
    // } else if (errorObj.status === 404) {
    //   this.snackBarService.openSnackBarError([mensajes.ERROR_CONEXION]);
    // } else if (errorObj.status > 400) {
    //   this.snackBarService.openSnackBarError(this.getCausaError(errorObj.error))
    // } else if (errorObj.status === 0) {
    //   this.snackBarService.openSnackBarError([mensajes.ERROR_CONEXION]);
    // } else {
    //   return [];
    // }
  }

  private mapearExcepciones() {
    // Object.keys(excepciones).map(key => {
    //   let codigoExcepcion = excepciones[key];
    //   let descripcionExcepcion = descripcion_excepciones[key];
    //   this.mapaExcepciones.set(codigoExcepcion, descripcionExcepcion)
    // })
  }

  private generarError(errores: any): string {
    //TODO i18n
    let error = ""
    let errorAnadido = false;
    let errorKeys = Object.keys(errores);
    errorKeys.map(key => {
      let errorMapeado = this.mapaExcepciones.get(key) || this.mapaExcepciones.get(errores[key]);
      if (errorMapeado) {
        error += key.toString() + ": " + errorMapeado;
      } else {
        error += key.toString() + ": " + errores[key];
      }
      if (errorKeys.length > 1) {
        error += "; "
      }
      errorAnadido = true;
    })
    if (!errorAnadido) {
      // error = mensajes.ERROR_GENERICO;
    }
    return error;
  }

  private getCausaError(objError: any): string {
    if (objError && objError.cause) {
      return this.getCausaError(objError.cause);
    }
    return "";
    //(objError && objError.message) ? objError.message : mensajes.ERROR_GENERICO;
  }
}