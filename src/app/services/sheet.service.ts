import { Injectable } from '@angular/core';
import { Sheet } from '../interfaces/Sheet';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  private data: Sheet[] = [
    {
      id: 'inyeccion01',
      titulo: 'Produccion Inyeccion',
      url: 'https://docs.google.com/spreadsheets/d/1KdbMpaU-ttxDbwSPz-ugCvHfKkHK4UG-XHLJcNotlSo/edit?gid=1830148115#gid=1830148115'
    },
    {
      id: 'estampado02',
      titulo: 'Produccion Estampado',
      url: 'https://docs.google.com/spreadsheets/d/1W5ijKPLuJWkgV2uHEUWC_HVdM8NYSxiqvvEY2DVP-cM/edit?gid=0#gid=0'
    },
    {
      id: 'ensamble03',
      titulo: 'Produccion Ensamble',
      url: 'https://docs.google.com/spreadsheets/d/111d1MeNNe2tLLZj9bhYB3hBq1CTkrVKvDeitnRGK7Fs/edit?gid=0#gid=0'
    }
  ];

  constructor() { }

  get dataSheets() {
    return this.data
  }
}
