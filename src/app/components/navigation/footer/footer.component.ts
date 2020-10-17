import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
   //variable Declarations
   //parametros de nentrada Input
   @Input() empresa: string;
   @Input() anio: number;

  ngOnInit(): void {
  }

}
