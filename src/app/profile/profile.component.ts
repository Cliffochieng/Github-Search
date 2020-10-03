import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { Profiler } from 'inspector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[GitSearchService]
  
})
export class ProfileComponent implements OnInit {
  profile:Profile;
  username:string;

  constructor(private GitSearchService:GitSearchService) { }
  findProfile(){
    this.GitSearchService.updateProfile(this.username);
    this.GitSearchService.profileRequest()
    this.profile=this.GitSearchService.profile
    }
  ngOnInit(): void {
  }

}
