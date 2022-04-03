import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
const config = require('../auth_config.json');

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private auth: AuthService) {}
}
