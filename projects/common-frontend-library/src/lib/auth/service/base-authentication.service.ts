import { Injectable } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {AuthenticationService} from './authentication-service';
import {KeycloakInstance} from 'keycloak-js';
import {KeycloakExtendedTokenParsed} from '../type/KeycloakExtendedTokenParsed';

@Injectable()
export class BaseAuthenticationService implements AuthenticationService {

  private keycloakInstance: KeycloakInstance;

  constructor(protected readonly keycloak: KeycloakService
  ) {
    this.keycloakInstance = this.keycloak.getKeycloakInstance();
  }

  email(): string | undefined {
    return this.keycloakInstance.profile?.email || (this.keycloakInstance.idTokenParsed as KeycloakExtendedTokenParsed)?.email;
  }

  realm(): string | undefined {
    return this.keycloakInstance.realm;
  }

  roles(): string[] {
    return this.keycloak.getUserRoles();
  }

  hasRole(role: string): boolean {
    return this.isUserInRole(role);
  }

  token(): string | undefined {
    return this.keycloakInstance.idToken;
  }

  isUserInRole(role: string, resource?: string): boolean {
    return this.keycloak.isUserInRole(role, resource);
  }

  userName(): string | undefined {
    return this.keycloakInstance.profile?.username || (this.keycloakInstance.idTokenParsed as KeycloakExtendedTokenParsed)?.name;
  }
}
