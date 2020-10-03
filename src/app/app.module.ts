import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule} from './routing/routing.module';
import { HighlightDirective } from './highlight.directive';
import { JoinDateCountPipe } from './join-date-count.pipe';
import { GitSearchService } from './git-search.service';
import { RepoComponent } from './repo/repo.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingModule,
    HighlightDirective,
    JoinDateCountPipe,
    RepoComponent,
    HomeComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent],
  exports: [HighlightDirective, JoinDateCountPipe]
})
export class AppModule { }
