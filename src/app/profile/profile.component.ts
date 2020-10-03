import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[GitSearchService]
  
})
export class ProfileComponent implements OnInit {
  profile:Profile;
  username:string;

  constructor() { }

  ngOnInit(): void {
  }

}
