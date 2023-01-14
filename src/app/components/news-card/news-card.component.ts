import { Component, Input, OnInit } from '@angular/core';
import { ArticlesEntity } from 'src/app/interfaces/news-response';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { IndexStorageService } from 'src/app/storage/useStorage'
import { element } from 'protractor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})


export class NewsCardComponent implements OnInit {
  @Input() news: ArticlesEntity;
  constructor(private toastController: ToastController, private indexStorage: IndexStorageService,private activatedRoute: ActivatedRoute,) {}
  public id :string = this.activatedRoute.snapshot.paramMap.get('id');

ngOnInit() {}


async removed_clicked(event) {
  let article_saved = false;
  const store = new Storage();
  store.create();
  const keys = await store.keys();
  console.log(this.news.title);
  for (let key of keys) {
    const storedArticle = await store.get(key);
    console.log("STORED ",key);
    if(this.news.title === storedArticle.title) {
      store.remove(key);
      article_saved = true;

      console.log("TRUE NEBO TAK NĚCO");
      break;
    }
  }
  if(!article_saved){
    store.set(Date.now().toString(),this.news);
    this.presentToast('bottom','ERROR 5')
  }else{
    this.presentToast('bottom',"article removed");
    window.location.reload();
  }
}

async saved_clicked(event) {
  let article_saved = false;
  const store = new Storage();
  store.create();
  const keys = await store.keys();
  for (let key of keys) {
    const storedArticle = await store.get(key);
    if(this.news.title === storedArticle.title) {
      article_saved = true;
      console.log("TRUE NEBO TAK NĚCO");
      break;
    }
  }
  if(!article_saved){
    store.set(Date.now().toString(),this.news);
    this.presentToast('bottom','article saved')
  }else{
    this.presentToast('bottom',"You've already saved this article");
  }
}



  async presentToast(position:'bottom',message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      cssClass: 'custom-toast',
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel'
        }
      ],
    });

    await toast.present();



 

}
}

