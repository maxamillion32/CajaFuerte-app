import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { Storage } from '@ionic/storage';

import { CajaFuerteApp } from './app.component';

import { ContentPage } from '../pages/content/content';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListMasterPage } from '../pages/list-master/list-master';
import { FavoritesPage } from '../pages/favorites/favorites';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { SettingsPage } from '../pages/settings/settings';
import { SearchPage } from '../pages/search/search';

import { PasswordsPage } from '../pages/passwords/passwords';
import { PasswordPage } from '../pages/password/password';

import { AuthService } from '../providers/auth-service';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { AngularFireModule } from 'angularfire2';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
let pages = [
  CajaFuerteApp,
  ContentPage,
  LoginPage,
  SignupPage,
  TabsPage,
  TutorialPage,
  WelcomePage,
  ListMasterPage,
  FavoritesPage,
  ItemDetailPage,
  ItemCreatePage,
  SettingsPage,
  SearchPage,
  PasswordsPage,
  PasswordPage
];

export function declarations() {
  return pages;
}

export function entryComponents() {
  return pages;
}

export function providers() {
  return [
    Storage,
    AuthService,
    { deps: [ Storage ] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ];
}

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '7a8e133b'
  }
};

// YOUR FIREBASE SETTINGS GO HERE!
export const firebaseConfig = {
  apiKey: "AIzaSyAWLtjIAOfBRD0tHWU899mE9vwVJEv5mRQ",
  authDomain: "cajafuerte-2fbfb.firebaseapp.com",
  databaseURL: "https://cajafuerte-2fbfb.firebaseio.com",
  storageBucket: "cajafuerte-2fbfb.appspot.com",
  messagingSenderId: "105460697119"
};

@NgModule({
  declarations: declarations(),
  imports: [
    IonicModule.forRoot(CajaFuerteApp),
    AngularFireModule.initializeApp(firebaseConfig),
    CloudModule.forRoot(cloudSettings),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: [Storage, AuthService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
