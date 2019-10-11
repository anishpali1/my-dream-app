import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {
  
   title = 'testing-app';  
  servers=[];  
  
  OnAddServer() {  
    this.servers.push('Another Server Added');  
  }  
  
  onRemoveServer(id: number) {  
    const position = id + 1;  
    this.servers.splice(position, 1);  
  }  

  constructor() { }

  ngOnInit() {
  }

}
