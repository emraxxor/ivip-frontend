import { Injectable } from '@angular/core';

@Injectable()
export abstract class  AuthenticationService {

  abstract roles(): string[];

  abstract hasRole(role: string): boolean;

  abstract isUserInRole(role: string, resource?: string): boolean;

  abstract token(): string | undefined;

  abstract userName(): string | undefined;

  abstract realm(): string | undefined;

  abstract email(): string | undefined;
}

