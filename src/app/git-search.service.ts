import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  repo: any;
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
