import { Component, Input, OnInit } from '@angular/core';
import { MyModel } from '../my-model';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.css']
})
export class FormContentComponent implements OnInit {


  @Input()
  bindModel!: MyModel;

  constructor() { }

  ngOnInit(): void {
  }

}
