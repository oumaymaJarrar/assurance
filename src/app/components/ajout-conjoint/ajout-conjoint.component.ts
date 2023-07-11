import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserPresInscService } from 'src/app/services/user-pres-insc.service';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-ajout-conjoint',
  templateUrl: './ajout-conjoint.component.html',
  styleUrls: ['./ajout-conjoint.component.css']
})
export class AjoutConjointComponent {
  dateNaissanceConjoint?: Date | null;
  isValid:boolean=false;
  icon=faArrowLeftLong;
  constructor(private userService:UserPresInscService,private router:Router){
    this.dateNaissanceConjoint= null;
  }
  //this methode is used to validate min age> 18 
  getMaxDate(): string {
    const currentDate = new Date();
    const maxDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
    return maxDate.toISOString().split('T')[0];
  } 
  valid() {
    this.isValid = !!(this.userService.getRegimeConjoint() && (this.dateNaissanceConjoint !== null) );
    return this.isValid;
   }

   getRegimeConjoint(regime:string){
    this.userService.setRegimeConjoint(regime)
  }
  navigateToNextPage(){
  let selectedOption=this.userService.getOption()
  if(selectedOption === 'conjoint' ){
    this.router.navigate(['/etape4'])
  }else if(selectedOption==='conjointMoiEnfant'){
    this.router.navigate(['/enfant'])
  }
  console.log(this.userService.getOption())
  }
}
