import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Pipe, PipeTransform} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'My first AGM project';
  lat = 31.130024;
  lng =31.340092;
  url:string='https://jsonplaceholder.typicode.com/posts';
  branches:any[];
 

  constructor(private http:HttpClient) {
 
   }
  from:FormGroup;
  ngOnInit(): void {
        this.http.get(this.url).subscribe ( (res:any[]) => {this.branches = res }); 
        this.from=new FormGroup({
          email:new FormControl('',Validators.required),
          name:new FormControl('',CustomValidators.rangeLength([5, 9]))
        });
       
     
  }
  get email(){
    return this.from.get('email');
  };
  
  onSubmit(){
    console.log(this.from.value);
    if(this.from.invalid){
      
    }
    
  }

}
