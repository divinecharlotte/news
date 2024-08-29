import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { NewServiceService } from '../new-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: any[] = [];
  filterenews: any[] = [];
  originalNewsList: any[] = [];
  imgSrc: string = '';
  @ViewChildren('newsRef') newsRef!: ElementRef;

  constructor(private newsService: NewServiceService, private router: Router) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(data => {
      this.originalNewsList = data.articles;
      this.newsList = [...this.originalNewsList];
    });
  }

  private slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  navigateToNewsDetails(title: string) {
    const slugifiedTitle = this.slugify(title);
    this.router.navigate(['/home', slugifiedTitle]);
  }

  filterNewsBySource(sourceName: string) {
    this.filterenews = this.newsList.filter(news => news.source.name === sourceName);
    console.log("aaaaaaaaaaaaaaaaaaaaaaa",this.filterenews);
    console.log("auuuuuuuuuuuuuuuuuuuuuuuuuuuuu",this.newsList);
  }

  resetFilter() {
    this.newsList = [...this.originalNewsList];
    this.filterenews = [];
  }
}
