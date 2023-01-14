import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ArticlesEntity } from '../interfaces/news-response';
import { NewsapiService } from '../services/newsapi.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { IndexStorageService } from 'src/app/storage/useStorage'
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  newsList: ArticlesEntity[] = [];
  SearchVal : string;
 

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsApiService: NewsapiService
  ) {}

  private i = 1;

  // GetSearch(){
  //   console.log(this.SearchVal);
  // }


  ngOnInit() {
    this.i = 1;
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    if(this.folder=="saved"){
      
      const store = new Storage();
      store.create();
      store.forEach(element => {
        this.newsApiService
        this.newsList.push(element);
        console.log("TOHLE JE ELEMENT=: ",element);
      });
  }
    
    this.getTopHeadlines(this.i);
    
  }


  handleRefresh(event) {
    setTimeout(() => {
      this.getTopHeadlines(1);
      event.target.complete();
    }, 2000);
  };

  // CountrySelect(country){
  //   this.newsApiService
  //   .getTopCountryHeadlines(country, this.folder)
  //   .pipe(map((res) => res.articles))
  //   .subscribe((news) => (this.newsList = news));
  // }

  

  getTopHeadlines(i: number) {
    this.newsApiService
      .getTopCountryHeadlines('cz', this.folder, i)
      .pipe(map((res) => res.articles))
      .subscribe((news) => {
        this.newsList = [...this.newsList, ...news];
      });
  }

  onIonInfinite(ev) {
    this.i++;
    console.log(this.i);
    this.getTopHeadlines(this.i);
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
