import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import {KeycloakProfile} from "keycloak-js";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public profile? : KeycloakProfile;
  constructor(public keycloakService:KeycloakService){}
  
 async ngOnInit() {
  
    if (await this.keycloakService.isLoggedIn()) {
      this.keycloakService.loadUserProfile().then(profile=>{
        this.profile=profile;
      });
    }
      
  }

  login():void{
  this.keycloakService.login({
    redirectUri:  window.location.origin 
  })
  }

  logout():void{
    this.keycloakService.logout();
  }
  
}
