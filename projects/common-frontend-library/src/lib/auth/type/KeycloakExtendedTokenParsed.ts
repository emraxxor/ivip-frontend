import {KeycloakTokenParsed} from 'keycloak-js';

export interface KeycloakExtendedTokenParsed extends KeycloakTokenParsed {
  email: string | undefined;
  name: string | undefined;
}
