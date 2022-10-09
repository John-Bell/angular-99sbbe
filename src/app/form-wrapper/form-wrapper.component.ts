import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyModel } from '../my-model';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.css']
})
export class FormWrapperComponent implements OnInit {

  myModel: MyModel;
  myData$!: Observable<string>;

  constructor( dataService:DataServiceService) { 
    this.myData$ = dataService.myObservable$;
    this.myModel = {
      name: 'tss',
      password: 'pass'
    };
  }

  ngOnInit(): void {
  }

}
