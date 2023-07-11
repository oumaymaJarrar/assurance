import { Component, OnInit } from '@angular/core';
import {UserPresInscService} from '../../services/user-pres-insc.service'
import { Data } from 'src/app/models/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-souinscription1',
  templateUrl: './souinscription1.component.html',
  styleUrls: ['./souinscription1.component.css']
})
export class Souinscription1Component implements OnInit {
  constructor(private userService:UserPresInscService,private router:Router){}
  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;
  isChecked4: boolean = false;
  option1:any;
  onToggleChange(option: string) {
   this.userService.setOption(option)
    if (option==='moi') {
      this.isChecked1=true;
      this.isChecked2 = false;
      this.isChecked3 = false;
      this.isChecked4 = false;
    }else if (option === 'conjoint') {
      this.isChecked2=true;
      this.isChecked1 = false;
      this.isChecked3 = false;
      this.isChecked4 = false;
    }else if (option === 'moiEnfant') {
      this.isChecked3=true;
      this.isChecked1 = false;
      this.isChecked2 = false;
      this.isChecked4 = false;
    }else if (option === 'conjointMoiEnfant') {
      this.isChecked4=true;
      this.isChecked1 = false;
      this.isChecked2 = false;
      this.isChecked3 = false;
    }
    this.option1=this.userService.getOption()
    //console.log(this.userService.getOption())

  }
  

  navigateToNextPage(){
    this.router.navigate(['/etape2'])
  }
 
   
      
   
  ngOnInit(): void {
  
    console.log(this.userService.getOption())
    //console.log(this.userService.getOption())
    this.option1=this.userService.getOption();
   
  }
}
