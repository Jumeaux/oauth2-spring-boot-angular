import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import {KeycloakProfile} from "keycloak-js";
import { AccountService } from 'src/app/auth/account.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public profile? : KeycloakProfile;
  constructor(private keycloakService:KeycloakService, public accountService:AccountService){}
  
  ngOnInit(): void {
    
       this.keycloakService.loadUserProfile().then(profile=>{
        this.profile=profile;
      });
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
