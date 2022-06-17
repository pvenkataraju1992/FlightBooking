import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard=false;
  username!: string|null;
  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.userName;
      this.showAdminBoard = user.isAdminUser;
      if(!this.showAdminBoard){
        this.showUserBoard=true;
      }
  }
}
logout(){
  this.tokenStorageService.signOut();
  window.location.reload();
}
}
