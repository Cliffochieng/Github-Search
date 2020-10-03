import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingComponent } from './routing/routing.component';
import { HighlightDirective } from './highlight.directive';
import { JoinDateCountPipe } from './join-date-count.pipe';
import { RepoComponent } from './repo/repo.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    HighlightDirective,
    JoinDateCountPipe,
    RepoComponent,
    HomeComponent,
    ProfileComponent,
    PageNotFoundComponent
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
