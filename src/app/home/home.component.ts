import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  constructor(private service:PostService) { }
  branches:any[];
  

  ngOnInit():void {
    this.service.get().subscribe ( (res:any[]) => {this.branches = res }); 
    
  }

}
