import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-phone-number-formatter',
  templateUrl: './phone-number-formatter.component.html',
  styleUrls: ['./phone-number-formatter.component.css']
})
export class PhoneNumberFormatterComponent implements OnInit {

  constructor() { }
  @Input()
  phoneNumber: String = '';

  ngOnInit(): void {
  }

  countNumbers( s: String ){
    let numericString  = s.replace(/\D/g,'');
    return numericString;
  }

  format( ){
    let cleanString = this.countNumbers( this.phoneNumber );

    if(cleanString.length <= 3) {
      // console.log("case 1");
      this.phoneNumber = '('+ cleanString +')';

     }else if (cleanString.length >3 && cleanString.length <= 6){
      // console.log("case 2");
      this.phoneNumber = '('+ cleanString.substr(0,3) +') ' + cleanString.substr(3) ;

    }else if (cleanString.length >6  ){
      // console.log("case 3");
      this.phoneNumber = '('+ cleanString.substr(0,3) +') ' +
        cleanString.substr(3,3) + '-' +
        cleanString.substr(6,4);
    }
    return this.phoneNumber;
  }
  
  //get phone number in int form
  phoneNumberToInt() {
    return Number(this.phoneNumber.replace(/\D/g,''));
  }

  //get phone number in string form
  phoneNumberToString() {
    return this.format();
  }
}
