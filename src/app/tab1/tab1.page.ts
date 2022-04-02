import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { DbservService } from '../dbserv.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private http: HttpClient, private db: DbservService) {this.sort();}

  ngOnInit(): void {
    this.db.getpersonas().subscribe(arr => { this.personas=arr;});
  }
  

  personas: any = [];





  sort(): void{
    this.personas.sort(function(a,b){
      var aname= a.nombre.toUpperCase();
      var bname= b.nombre.toUpperCase();
      if(aname>bname){
        return 1;
      }
      if(bname>aname){
        return -1;
      }
    });
  }




}
