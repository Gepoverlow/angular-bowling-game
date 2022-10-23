import { Component, Input, OnInit } from '@angular/core';
import { BowlingGameService } from '../shared/bowling-game.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';

@Component({
  selector: 'app-calculator-container',
  templateUrl: './calculator-container.component.html',
  styleUrls: ['./calculator-container.component.css']
})
export class CalculatorContainerComponent implements OnInit {

  private _gameId !: string;
  private _name !: string;
  private _score !: number;
  private _rolls !: number[];

  constructor(private bowlingGameService: BowlingGameService, private dialog: MatDialog) {
    this._rolls = [];
  }

  ngOnInit(): void {

    this._name = "Default Game";
    this._gameId = "Default ID";
    this._score = 0;

  }

  public openCreateDialog() {

    let dialogRef = this.dialog.open(CreateDialogComponent, { disableClose: true })

    dialogRef.afterClosed().subscribe(result => {

      if (result.data) {

        this.bowlingGameService.createBowlingGame(result.data).subscribe({

          next: (data) => {

            this._gameId = data.gameId;
            this._name = data.name;
            this._score = data.score;
            this._rolls = [];

          },
          error: (error) => {
            console.log(error)
          }

        })

      }

    })

  }

  public get gameId() {
    return this._gameId;
  }

  public set gameId(newGameId: string) {
    this._gameId = newGameId;
  }

  public get name() {
    return this._name;
  }

  public set name(newName: string) {
    this._name = newName;
  }

  public get score() {
    return this._score;
  }

  public set score(newScore: number) {
    this._score = newScore;
  }

  public get rolls() {
    return this._rolls;
  }

  public set rolls(newRolls: number[]) {
    this._rolls = newRolls;
  }

}
