import { Component, OnInit } from '@angular/core';
import { SafePipe } from '../../../../pipes/safe.pipe';
import { SheetService } from '../../../../services/sheet.service';
import { Sheet } from '../../../../interfaces/Sheet';

@Component({
  selector: 'app-inyeccion',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './inyeccion.component.html',
  styleUrl: './inyeccion.component.scss'
})
export class InyeccionComponent implements OnInit {

  public heigthScreen: any;
  public dataSheet!: Sheet;

  constructor(
    private sheetService: SheetService
  ) {
    this.heigthScreen = window.innerHeight * 1.1;
  }

  ngOnInit(): void {
    const data = this.sheetService.dataSheets.filter( sheet => sheet.id === 'inyeccion01');
    this.dataSheet = data[0];
  }
  
}
