import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';

@NgModule({
  declarations: [AppComponent, MainViewComponent],
  imports: [BrowserModule, AppRoutingModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
