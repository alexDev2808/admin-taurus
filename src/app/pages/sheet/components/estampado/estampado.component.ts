import { Component } from '@angular/core';
import { SheetService } from '../../../../services/sheet.service';
import { Sheet } from '../../../../interfaces/Sheet';
import { SafePipe } from '../../../../pipes/safe.pipe';

@Component({
  selector: 'app-estampado',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './estampado.component.html',
  styleUrl: './estampado.component.scss'
})
export class EstampadoComponent {

  public heigthScreen: any;
  public dataSheet!: Sheet;

  constructor(
    private sheetService: SheetService
  ) {
    this.heigthScreen = window.innerHeight * 1.1;
  }

  ngOnInit(): void {
    const data = this.sheetService.dataSheets.filter( sheet => sheet.id === 'estampado02');
    this.dataSheet = data[0];
  }

}
