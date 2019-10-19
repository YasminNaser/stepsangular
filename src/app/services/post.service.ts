import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  url:string='https://jsonplaceholder.typicode.com/posts';
  private  branches:any[];

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get(this.url);
    
  }
}
