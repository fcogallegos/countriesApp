import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {


  term: string = '';
  thereError: boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService ) { }


  search( term: string ) {
    this.thereError = false;
    this.term = term;
  

    this.countryService.searchCountry(term)
      .subscribe( (countries) => {
        console.log(countries);
        this.countries = countries;
      }, (err) => {
        this.thereError = true;
        this.countries = [];
      });
  }

}
