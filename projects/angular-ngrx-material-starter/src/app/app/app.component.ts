import browser from 'browser-detect';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { environment as env } from '../../environments/environment';

import {
  authLogin,
  authLogout,
  routeAnimations,
  LocalStorageService,
  selectIsAuthenticated,
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  selectEffectiveTheme,
  CoreModule
} from '../core/core.module';
import {
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeLanguage
} from '../core/settings/settings.actions';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';
import { SharedModule } from '../shared/shared.module';
@Component({
  selector: 'app-lbt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
  imports: [
    SharedModule,
    CoreModule,
    RouterOutlet,
    AsyncPipe,
    RouterLink,
  ]
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = './assets/logo.png';
  languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he'];
  navigation = [
    { link: 'about', label: 'anms.menu.about' },
    { link: 'feature-list', label: 'anms.menu.features' },
    { link: 'examples', label: 'anms.menu.examples' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'anms.menu.settings' }
  ];

  isAuthenticated$: Observable<boolean>;
  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private readonly _store: Store,
    private readonly _storageService: LocalStorageService
  ) {}

  toggleSidenav() {
    this.sidenav.toggle();
  }

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this._storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this._store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }

    this.isAuthenticated$ = this._store.pipe(select(selectIsAuthenticated));
    this.stickyHeader$ = this._store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this._store.pipe(select(selectSettingsLanguage));
    this.theme$ = this._store.pipe(select(selectEffectiveTheme));
  }

  onLoginClick() {
    this._store.dispatch(authLogin());
  }

  onLogoutClick() {
    this._store.dispatch(authLogout());
  }

  onLanguageSelect({ value: language }) {
    this._store.dispatch(actionSettingsChangeLanguage({ language }));
  }
}
