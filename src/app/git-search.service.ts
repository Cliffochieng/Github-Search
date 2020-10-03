import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment'
import { Profile } from './profile-class/profile';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  private username:string;
  profile:Profile;
  repo: Repo;
  
  repoRequest() {
    throw new Error("Method not implemented.");
  }
  profile: any;
  updateProfile(username: string) {
    throw new Error("Method not implemented.");
  }
  profileRequest() {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
