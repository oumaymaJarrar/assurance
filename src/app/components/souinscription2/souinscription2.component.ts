import { Component, OnInit } from '@angular/core';
import {UserPresInscService} from '../../services/user-pres-insc.service'
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-souinscription2',
  templateUrl: './souinscription2.component.html',
  styleUrls: ['./souinscription2.component.css']
})
export class Souinscription2Component implements OnInit{
  currentDate: Date;
  minDate: Date;
  selectdate:Date;
  isDateSelected: boolean = false;
  icon=faArrowLeftLong;


  constructor(private userService:UserPresInscService,private router:Router){
    this.currentDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.currentDate.getDate() + 1);
    this.selectdate=new Date();
  }
  navigateToNextPage(){
    console.log(this.selectdate)
    this.router.navigate(['/etape3'])
  }
  onDateSelected(){
    this.isDateSelected = !!this.selectdate;
  }
  ngOnInit(): void {
      this.userService.setDateDebutContrat(this.selectdate)
       
  }


  // dateDebutContrat: FormControl;
  // myForm: FormGroup;
  // constructor(private formBuilder: FormBuilder) {
  //   this.dateDebutContrat = new FormControl('', [Validators.required, this.validateDateDebutContrat]); // Initialize the dateDebutContrat property

  //   this.myForm = this.formBuilder.group({
  //     dateDebutContrat: this.dateDebutContrat
  //   });
  // }

  //FormControl: est utilisé pour suivre les valeurs et la validation d'un contrôle de formulaire.
  // validateDateDebutContrat(control: FormControl): { [key: string]: any } | null {
  //   const selectedDate = new Date(control.value);
  //   const currentDate = new Date();
  //   const minDate = new Date();
  //   minDate.setDate(currentDate.getDate() + 1); // Ajouter un jour à la date actuelle
  
  //   if (selectedDate < minDate) {
  //     return { dateDebutInvalid: true }; // Validation échouée
  //   }
  
  //   return null; // Validation réussie
  // }

  // onSubmit(): void {
  //   if (this.myForm.valid) {
  //     console.log('Form submitted');
  //     // Add logic to handle form submission
  //   } else {
  //     console.log('Form invalid');
  //     // Handle form validation errors
  //   }
  // }
 


}
