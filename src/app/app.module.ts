import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingComponent } from './routing/routing.component';
import { HighlightDirective } from './highlight.directive';
import { JoinDateCountPipe } from './join-date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    HighlightDirective,
    JoinDateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HighlightDirective, JoinDateCountPipe]
})
export class AppModule { }
