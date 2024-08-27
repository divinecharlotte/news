import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { NewServiceService } from '../new-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsList: any[] = [];
  imgSrc: string =''
  @ViewChildren('newsRef') newsRef!: ElementRef;
  constructor( private newsService: NewServiceService) {

   }

  ngOnInit():void {
    this.newsService.getNews().subscribe(data => {
      this.newsList = data.articles;
      console.log(this.newsList);
    });
  }

}
