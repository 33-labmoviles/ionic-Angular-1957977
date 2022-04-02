import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DbservService } from '../dbserv.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private http: HttpClient, private db: DbservService) {}


  ngOnInit(): void {
    this.db.getpersonas().subscribe(arr => { this.personas=arr;});
  }

  personas: any = [];
}
