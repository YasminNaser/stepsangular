import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {ObservableModule } from  'rxjs/Rx';
import { Observable } from 'rxjs';
import {Pipe, PipeTransform} from '@angular/core';


// import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  url:string='https://jsonplaceholder.typicode.com/posts';
  branches:any[];

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
        this.http.get(this.url).subscribe ( (res:any[]) => {this.branches = res }); 
  }

}
