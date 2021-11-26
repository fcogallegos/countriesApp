import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button { 
        margin-right: 5px;
        
      }
    `
  ]
})
export class ByRegionComponent {


  regions: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS'
                      ,'CEFTA','NAFTA','SAARC'];
  activeRegion: string = '';

  constructor() { }

  getClassCSS( region: string ): string {
    return (region === this.activeRegion) ? 'btn btn-primary':'btn btn-outline-primary';
  }

  activateRegion( region: string ) {
    this.activeRegion = region;

    //TODO: MAKE TO CALL SERVICE
  }

}


