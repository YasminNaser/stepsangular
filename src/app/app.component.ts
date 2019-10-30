import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Steps App';
  constructor(
    private userServ: UserService,
    private authServ: AuthService,
    private route: ActivatedRoute,
    private router: Router  ){
    this.authServ.user$.subscribe(user=> {
      if(user){
        this.userServ.save(user);
        let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl');
        router.navigateByUrl(returnUrl);
        
      }
    })
  }
}
