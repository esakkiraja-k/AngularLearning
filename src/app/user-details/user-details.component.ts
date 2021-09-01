import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userName = "";
  allowSave = false;
  constructor() {
     }
     OnEnterUserName(event:Event){       
      if((<HTMLInputElement>event.target).value.length > 0){
      this.allowSave = true
      }
      else{
        this.allowSave = false;
      }
     }
  ngOnInit(): void {
  }
  onSave()
  {
  this.userName = "";
  }

}
