import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPresInscService } from 'src/app/services/user-pres-insc.service';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-souinscription3',
  templateUrl: './souinscription3.component.html',
  styleUrls: ['./souinscription3.component.css']
})
export class Souinscription3Component implements OnInit {
   dateNaissanceuser? :Date | null;
    isValid:boolean=false;
    icon=faArrowLeftLong;

  constructor(private userService:UserPresInscService,private router:Router){
    this.dateNaissanceuser = null;
  }
  //this methode is used to validate min age> 18 
  getMaxDate(): string {
    const currentDate = new Date();
    const maxDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
    return maxDate.toISOString().split('T')[0];
  }  

   
  getRegime(regime:string){
    this.userService.setRegime(regime)
  }
  // this methode is used to validate that regime and date naissance is truthy
  valid() {
    this.isValid = !!( this.userService.getRegime() && (this.dateNaissanceuser !== null) );
    return this.isValid;
   }
   
  navigateToNextPage(){
  let selectedOption=this.userService.getOption()
  if (selectedOption==='moi') {
    this.router.navigate(['/etape4'])
  }else if(selectedOption === 'conjoint' || selectedOption === 'conjointMoiEnfant'){
    this.router.navigate(['/conjoint'])
  }else if(selectedOption==='moiEnfant'){
    this.router.navigate(['/enfant'])
  }
  console.log(this.userService.getOption())
  }
  ngOnInit(): void {
      //  if(this.dateNaissanceuser!==null){
      //   this.userService.setDateNaissanceAssure(this.dateNaissanceuser)
      //  }
  }
}
