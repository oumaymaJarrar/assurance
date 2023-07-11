import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserPresInscService } from 'src/app/services/user-pres-insc.service';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-ajout-enfant',
  templateUrl: './ajout-enfant.component.html',
  styleUrls: ['./ajout-enfant.component.css']
})
export class AjoutEnfantComponent {
  constructor(private userService:UserPresInscService,private router:Router){}
 counter:number=1;
 inputs:number[]=[1];
 icon=faArrowLeftLong;

 navigateToPreviousStep(){
  let selectedOption=this.userService.getOption()
  if (selectedOption==='moiEnfant') {
    this.router.navigate(['/etape3'])
  }else if(selectedOption === 'conjointMoiEnfant' ){
    this.router.navigate(['/conjoint'])
  }
  console.log(this.userService.getOption())
  }
  
 decrementCounter(){
  if (this.counter===0) {
    this.counter=0;
  }else{
    this.counter=this.counter-1;
    this.inputs.pop();
  }
 };
 incrementCounter(){
  this.counter++;
  this.inputs.push(this.counter);
 };
}
