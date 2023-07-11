import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Souinscription1Component } from './components/souinscription1/souinscription1.component';
import { Souinscription2Component } from './components/souinscription2/souinscription2.component';
import { Souinscription3Component } from './components/souinscription3/souinscription3.component';
import { Souinscription4Component } from './components/souinscription4/souinscription4.component';
import { Souinscription5Component } from './components/souinscription5/souinscription5.component';
import { AjoutConjointComponent } from './components/ajout-conjoint/ajout-conjoint.component';
import { AjoutEnfantComponent } from './components/ajout-enfant/ajout-enfant.component';
import { HeaderComponent } from './components/header/header.component';
import { TesteComponent } from './components/teste/teste.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    Souinscription1Component,
    Souinscription2Component,
    Souinscription3Component,
    Souinscription4Component,
    Souinscription5Component,
    AjoutConjointComponent,
    AjoutEnfantComponent,
    HeaderComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
