import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewsCardComponent } from './news-card.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [NewsCardComponent],
  exports: [NewsCardComponent],
})
export class NewsCardComponentModule {}
