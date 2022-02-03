import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User} from '../Model/user.model';
import { FeedbackService } from '../services/feedback.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  path: string;
  user?: User={
    id: 0,
    first_name:"Angel",
    last_name:"Mondragon",
    email:"angel@angel.com",
    avatar:"https://reqres.in/img/faces/3-image.jpg"

  };
  constructor(
    private route: ActivatedRoute,
    private userSvc: UserService,
    private feedbackSvc: FeedbackService,
    private router: Router)
    {
      this.feedbackSvc.loading.next(true);
      this.route.params.subscribe((parameters)=>{
        console.log(parameters.id);
        this.userSvc.getUser(parameters.id).subscribe((response)=>{
          this.user=response["data"];
          this.path=this.user.avatar;
          console.log(this.user);
        });
      });
    }

  ngOnInit() {
  }

  getHome(){
    this.router.navigate(['/home'])
  }

}
