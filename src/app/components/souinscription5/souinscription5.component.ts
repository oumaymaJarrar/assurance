import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserPresInscService } from 'src/app/services/user-pres-insc.service';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-souinscription5',
  templateUrl: './souinscription5.component.html',
  styleUrls: ['./souinscription5.component.css']
})
export class Souinscription5Component {
  constructor(private userService:UserPresInscService,private router:Router){}
  numeroValue: string = '';
  numeroPattern = '[0-9]{9}';
  icon=faArrowLeftLong;

  validateNumero(control: AbstractControl): { [key: string]: any } | null {
    const numero = control.value;
    if (numero && numero.length === 9 && /^\d+$/.test(numero)) {
      return null; // Le numéro est valide
    }
    return { 'numeroInvalid': true }; // Le numéro est invalide
  }

}
