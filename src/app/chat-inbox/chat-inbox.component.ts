import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client'


@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.scss']
})
export class ChatInboxComponent implements OnInit {
  SOCKET_ENDPOINT = "localhost:8081";

  socket;
  constructor() { }
  ngOnInit() {
    this.setupSocketConnection();
  }
  setupSocketConnection() {
    console.log(this.SOCKET_ENDPOINT)
     this.socket = io.io(this.SOCKET_ENDPOINT);
  }

}
