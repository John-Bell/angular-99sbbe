import { Component, OnInit } from '@angular/core';
import { MyModel } from '../my-model';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.css']
})
export class FormWrapperComponent implements OnInit {

  myModel: MyModel;

  constructor() { 
    this.myModel = {
      name: 'tss',
      password: 'pass'
    };
  }

  ngOnInit(): void {
  }

}
