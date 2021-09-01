import { Component, OnInit } from '@angular/core';


@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverName = 'TestServer'
  serverCreationStatus = 'No Server was created';
  serverCreated = false;
  servers = ['Testserver','Testserver2']
  logs = [];
  counter = 0;
  showTxt = false;
  constructor() { 
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onUpdateServerName(event:Event){
    this.serverName =  (<HTMLInputElement>event.target).value;
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!! Name is' +this.serverName ;
    
  }
  onDisplayDetails(){
    this.counter++;
    this.logs.push('number of times button clicked:' + this.counter + 'at date' + new Date());
    if(this.showTxt)
    {
      this.showTxt = false;
    }
    else{
      this.showTxt = true;
    }
    return this.showTxt;
  }
  getBackgroundColor() {
    if (this.counter >= 5) {
    return 'blue';
    }
  }
  enableColor(){
    return this.counter >= 5;
  }
}
