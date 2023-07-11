import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Souinscription1Component } from './components/souinscription1/souinscription1.component';
import { Souinscription2Component } from './components/souinscription2/souinscription2.component';
import { Souinscription3Component } from './components/souinscription3/souinscription3.component';
import { Souinscription4Component } from './components/souinscription4/souinscription4.component';
import { Souinscription5Component } from './components/souinscription5/souinscription5.component';
import { AjoutConjointComponent } from './components/ajout-conjoint/ajout-conjoint.component';
import { AjoutEnfantComponent } from './components/ajout-enfant/ajout-enfant.component';
import { TesteComponent } from './components/teste/teste.component';
const routes: Routes = [
  {path:"",redirectTo:'/etape1',pathMatch:'full'},
  {path:'etape1', component: Souinscription1Component},
  {path:'etape2', component: Souinscription2Component},
  {path:'etape3',component:Souinscription3Component},
  {path:'etape4',component:Souinscription4Component},
  {path:'etape5',component:Souinscription5Component},
  {path:'conjoint',component:AjoutConjointComponent},
  {path:'enfant',component:AjoutEnfantComponent},
   {path:'teste',component:TesteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
