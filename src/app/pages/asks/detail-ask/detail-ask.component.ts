import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-detail-ask',
  templateUrl: './detail-ask.component.html',
  styleUrls: ['./detail-ask.component.scss'],
})
export class DetailAskComponent implements OnInit {
  id: any;
  data: any;
  listComment: any = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((val: any) => {
      this.id = val?.id;
    });
    this.getData();
  }

  getData() {
    this.apiService
      .getDataApi(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json`)
      .subscribe((res) => {
        this.data = res;

        this.data?.kids.forEach((el: any) => {
          this.getComment(el);
        });
      });
  }

  getComment(id: any) {
    this.apiService
      .getDataApi(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .subscribe((res) => {
        this.listComment.push(res);
        console.log(this.listComment);
      });
  }
}
