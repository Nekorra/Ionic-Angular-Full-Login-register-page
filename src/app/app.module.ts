import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { CallNumber } from '@ionic-native/call-number/ngx'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule, 
            AngularFireAuthModule,
            AngularFireModule.initializeApp(environment.firebase),
            ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
            AngularFirestoreModule.enablePersistence(), ],

    
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
