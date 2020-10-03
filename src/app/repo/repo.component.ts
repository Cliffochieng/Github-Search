import { Component, OnInit } from '@angular/core';

import { GitSearchService } from '../git-search.service';
import { Repo } from '../repo';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  providers:[GitSearchService],
})
export class RepoComponent implements OnInit {
  username:string;
  repo:Repo;
  
  constructor() { }

  ngOnInit(): void {
  }

}
