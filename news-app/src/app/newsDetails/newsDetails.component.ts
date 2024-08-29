import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewServiceService } from '../new-service.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './newsDetails.component.html',
  styleUrls: []
})
export class NewsDetailsComponent implements OnInit {
  newsDetails: any;

  constructor(
    private route: ActivatedRoute,
    private newService: NewServiceService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const title = params.get('title');
      if (title) {
        this.loadNewsDetails(title);
      }
    });
  }

  loadNewsDetails(title: string) {
    this.newService.getNews().subscribe(data => {
      this.newsDetails = data.articles.find((article: any) => 
        this.slugify(article.title) === title
      );
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
}
