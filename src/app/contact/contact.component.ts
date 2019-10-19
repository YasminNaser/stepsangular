import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {Pipe, PipeTransform} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'My first AGM project';
  lat = 31.130024;
  lng =31.340092;
  branches:any[];
  
 

  constructor(private service:PostService) {}
  from:FormGroup;

  ngOnInit(): void {
        this.service.get().subscribe ( (res:any[]) => {this.branches = res }); 
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
