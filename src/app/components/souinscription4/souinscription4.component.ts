import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserPresInscService } from 'src/app/services/user-pres-insc.service';
import {faArrowLeftLong, faLocationDot} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-souinscription4',
  templateUrl: './souinscription4.component.html',
  styleUrls: ['./souinscription4.component.css']
})
export class Souinscription4Component {
  icon=faArrowLeftLong;
  iconMap=faLocationDot;
  constructor(private userService:UserPresInscService,private router:Router){}
  navigateToPreviousStep(){
  let selectedOption=this.userService.getOption()
  if (selectedOption==='moi') {
    this.router.navigate(['/etape3'])
  }else if(selectedOption === 'conjoint' ){
    this.router.navigate(['/conjoint'])
  }else if(selectedOption==='moiEnfant'|| selectedOption === 'conjointMoiEnfant'){
    this.router.navigate(['/enfant'])
  }
  console.log(this.userService.getOption())
  }

}
