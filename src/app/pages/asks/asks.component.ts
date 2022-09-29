import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { StateAsksService } from 'src/app/shared/services/state-asks.service';

@Component({
  selector: 'app-asks',
  templateUrl: './asks.component.html',
  styleUrls: ['./asks.component.scss'],
})
export class AsksComponent implements OnInit {
  listAsks: any;
  cloneData: any = [];
  _asks: Subscription | undefined;

  constructor(
    private apiService: ApiService,
    private stateAsks: StateAsksService
  ) {}

  ngOnInit(): void {
    this._asks = this.stateAsks.dataAsks.subscribe((val) => {
      this.listAsks = val;
      if (this.listAsks.length == 0) {
        this.getAsks();
      }
    });
  }

  getAsks() {
    this.apiService
      .getDataApi(' https://hacker-news.firebaseio.com/v0/askstories.json')
      .subscribe((res) => {
        res.forEach((el: any, i: number) => {
          if (i < 20) {
            // get data per data
            this.apiService
              .getDataApi(
                `https://hacker-news.firebaseio.com/v0/item/${el}.json`
              )
              .subscribe((resp) => {
                this.listAsks.push(resp);
                this.stateAsks.dataAsks.next(this.listAsks);
              });
          }
        });
      });
  }
}
