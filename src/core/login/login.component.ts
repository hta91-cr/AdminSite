import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {

  }



  @Output() menuVisible = new EventEmitter<any>();
  ngOnInit() {

  }

  logIn(visible: Boolean) {
    this.menuVisible.emit(visible);
  }

}
