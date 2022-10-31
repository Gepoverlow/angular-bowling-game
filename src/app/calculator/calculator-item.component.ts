import { Component, Input } from '@angular/core';
import { BowlingGameService } from '../shared/bowling-game.service';
import { MatDialog } from '@angular/material/dialog';
import { RollDialogComponent } from './roll-dialog/roll-dialog.component';
import { UpdateNameDialogComponent } from './update-name-dialog/update-name-dialog.component';

@Component({
  selector: 'app-calculator-item',
  templateUrl: './calculator-item.component.html',
  styleUrls: ['./calculator-item.component.css']
})
export class CalculatorItemComponent {

  @Input() gameId?: string;
  @Input() name?: string;
  @Input() score?: number;
  @Input() rolls?: number[];
  private _errorMsg: string = "None";

  constructor(private bowlingGameService: BowlingGameService, private dialog: MatDialog) { }

  public openPerformRollDialog() {
    let dialogRef = this.dialog.open(RollDialogComponent, { disableClose: true })

    dialogRef.afterClosed().subscribe(result => {

      if (result.data) {

        this.bowlingGameService.performBowlingRoll(result.data, this.gameId).subscribe({

          next: (data) => {

            this.score = data.score;
            this._errorMsg = "All good !";

            if (this.rolls) {
              this.rolls.push(result.data.pins);
            }

          },
          error: (err) => {

            this._errorMsg = err.error.message;

          }

        })

      }

    })
  }

  public openChangeGameNameDialog() {
    let dialogRef = this.dialog.open(UpdateNameDialogComponent, { disableClose: true })

    dialogRef.afterClosed().subscribe(result => {

      if (result.data) {

        this.bowlingGameService.upDateBowlingGame(result.data, this.gameId).subscribe({

          next: (data) => {

            this.name = data.name;

          },
          error: (err) => {

            console.log(result);
            this._errorMsg = err.error.message;

          }

        })

      }

    })
  }

  public get errorMsg() {
    return this._errorMsg;
  }

}
