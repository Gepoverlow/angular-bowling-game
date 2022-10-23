import { Component, Input, OnInit } from '@angular/core';
import { BowlingGameService } from '../shared/bowling-game.service';
import { MatDialog } from '@angular/material/dialog';
import { RollDialogComponent } from './roll-dialog/roll-dialog.component';

@Component({
  selector: 'app-calculator-item',
  templateUrl: './calculator-item.component.html',
  styleUrls: ['./calculator-item.component.css']
})
export class CalculatorItemComponent implements OnInit {

  @Input() gameId !: string;
  @Input() name !: string;
  @Input() score !: number;
  @Input() rolls !: number[];
  private _errorMsg !: string

  constructor(private bowlingGameService: BowlingGameService, private dialog: MatDialog) {
    this._errorMsg = "None";
  }

  ngOnInit(): void {

  }

  public openPerformRollDialog() {
    let dialogRef = this.dialog.open(RollDialogComponent, { disableClose: true })

    dialogRef.afterClosed().subscribe(result => {

      if (result.data) {

        this.bowlingGameService.performBowlingRoll(result.data, this.gameId).subscribe({

          next: (data) => {

            this.score = data.score;
            this._errorMsg = "All good !";
            this.rolls.push(result.data.pins);

          },
          error: (err) => {
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
