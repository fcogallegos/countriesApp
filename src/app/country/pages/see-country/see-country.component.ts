import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';



@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, 
               private countryService: CountryService ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe( 
      switchMap( ({id}) => this.countryService.getCountryById( id ) )
    )  
    .subscribe( resp => {
        console.log(resp);
      })

    // this.activatedRoute.params
    //   .subscribe( ({id}) => {
    //     console.log(id);

    //     this.countryService.getCountryById( id )
    //       .subscribe( country => {
    //         console.log(country);
    //       })
    //   });
  }

}
