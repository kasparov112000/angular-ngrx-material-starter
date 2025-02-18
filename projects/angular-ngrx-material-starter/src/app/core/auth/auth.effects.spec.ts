import { Router } from '@angular/router';
import { getEffectsMetadata } from '@ngrx/effects';
import { TestScheduler } from 'rxjs/testing';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { AuthEffects, AUTH_KEY } from './auth.effects';

const scheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected); // Use Jasmine's expect instead of assert
});

describe('AuthEffects', () => {
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    localStorageService = jasmine.createSpyObj('LocalStorageService', ['setItem']);
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);
  });

  describe('login', () => {
    it('should not dispatch any action', () => {
      const effect = new AuthEffects();
      const metadata = getEffectsMetadata(effect);

      expect(metadata.login.dispatch).toBeFalse();
    });

    it('should call setItem on LocalStorageService', () => {
      scheduler.run(({ cold }) => {

        const effect = new AuthEffects();

        effect.login.subscribe(() => {
          expect(localStorageService.setItem).toHaveBeenCalledWith(AUTH_KEY, {
            isAuthenticated: true
          });
        });
      });
    });
  });

  describe('logout', () => {
    it('should not dispatch any action', () => {
      const effect = new AuthEffects();
      const metadata = getEffectsMetadata(effect);

      expect(metadata.logout.dispatch).toBeFalse();
    });

    it('should call setItem on LocalStorageService and navigate to home', () => {
      scheduler.run(({ cold }) => {
        const effect = new AuthEffects();
        effect.logout.subscribe(() => {
          expect(localStorageService.setItem).toHaveBeenCalledWith(AUTH_KEY, {
            isAuthenticated: false
          });
          expect(router.navigateByUrl).toHaveBeenCalledWith('');
        });
      });
    });
  });
});
