import { Injectable } from '@angular/core';
import {KeycloakProfile} from "keycloak-js";
import {KeycloakEventType, KeycloakService} from "keycloak-angular";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public profile?: KeycloakProfile;
  constructor(private keycloakService:KeycloakService) {
    this.init();

  }

  init():void{
    this.keycloakService.keycloakEvents$.subscribe(
      {
        next: (e) =>{
          if (e.type== KeycloakEventType.OnAuthSuccess) {

            this.keycloakService.loadUserProfile().then((profile)=>this.profile=profile);
          }
        },
        error: (err)=>console.log(err)
        
      }
    )
  }

  hasAnyRoles(roles:string[]):boolean{

    const userRoles=this.keycloakService.getUserRoles();

    return userRoles.some((role:string)=> roles.includes(role));
  }
}
