import { Component,OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { MainTopBarMenuService } from './services/core/main-top-bar-menu.service';

declare var App:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private menuSvc: MainTopBarMenuService){

  }
  title = 'app-real-time';

  miEmpresa: string="Grupo Modelo";
  periodo: number=2020;
  
  menuItems:any[]=[];
  
  ngOnInit()
  {
    //load sidebar script
    App.init();
    //load Data
    this.getData();
  }
getData(){
  this.menuSvc.getItemsMenu().subscribe((data:any)=>{
    this.menuItems= data;
  });
}
}
