import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TracksPage} from './tracks';

@NgModule({
  declarations: [
    TracksPage,
  ],
  imports: [
    IonicPageModule.forChild(TracksPage),
  ],
})
export class TracksPageModule {
}
