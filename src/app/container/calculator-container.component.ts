import { Component, Input, OnInit } from '@angular/core';
import { BowlingGameService } from '../shared/bowling-game.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { CalculatorModel } from "../calculator/calculator-model"

@Component({
  selector: 'app-calculator-container',
  templateUrl: './calculator-container.component.html',
  styleUrls: ['./calculator-container.component.css']
})
export class CalculatorContainerComponent implements OnInit {

  private _calculators !: CalculatorModel[];

  constructor(private bowlingGameService: BowlingGameService, private dialog: MatDialog) {
    this._calculators = [];
  }

  ngOnInit(): void { }

  public openCreateDialog() {

    let dialogRef = this.dialog.open(CreateDialogComponent, { disableClose: true })

    dialogRef.afterClosed().subscribe(result => {

      if (result.data) {

        this.bowlingGameService.createBowlingGame(result.data).subscribe({

          next: (data) => {

            let newBowlingCalculator = new CalculatorModel(data.gameId, data.name, data.score);
            this._calculators.push(newBowlingCalculator);

          },
          error: (error) => {
            console.log(error)
          }

        })

      }

    })

  }

  public get calculators() {
    return this._calculators;
  }

  public set calculators(newCalculators: CalculatorModel[]) {
    this._calculators = newCalculators;
  }

}
