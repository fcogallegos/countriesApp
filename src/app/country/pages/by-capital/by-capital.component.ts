import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  term: string = '';
  thereError: boolean = false;
  capitals: Country[] = [];
  
  constructor( private countryService: CountryService  ) { }

  search( term: string ) {
    this.thereError = false;
    this.term = term;
  

    this.countryService.searchCapital(term)
      .subscribe( (capitals) => {
        console.log(capitals);
        this.capitals = capitals;
      }, (err) => {
        this.thereError = true;
        this.capitals = [];
      });
  }

}
