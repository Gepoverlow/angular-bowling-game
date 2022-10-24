export class CalculatorModel {

    private _gameId: string;
    private _name: string;
    private _score: number;
    private _rolls: number[];

    constructor(gameId: string, name: string, score: number) {

        this._gameId = gameId;
        this._name = name;
        this._score = score;
        this._rolls = [];

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