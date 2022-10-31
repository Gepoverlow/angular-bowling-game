import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BowlingGameReq } from './bowling-game-request';
import { BowlingGameRes } from './bowling-game-response';
import { Observable } from 'rxjs';
import { PinsReq } from './pins-request';

@Injectable({
  providedIn: 'root',
})
export class BowlingGameService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public createBowlingGame(bowlingGameReq: BowlingGameReq): Observable<BowlingGameRes> {

    return this.http.post<BowlingGameRes>(`${this.apiUrl}/bowling`, bowlingGameReq);

  }

  public performBowlingRoll(pinsReq: PinsReq, gameId?: string): Observable<BowlingGameRes> {

    return this.http.post<BowlingGameRes>(`${this.apiUrl}/bowling/${gameId}`, pinsReq);

  }

  public upDateBowlingGame(bowlingGameReq: BowlingGameReq, gameId?: string): Observable<BowlingGameRes> {

    return this.http.put<BowlingGameRes>(`${this.apiUrl}/bowling/${gameId}`, bowlingGameReq)

  }

}
