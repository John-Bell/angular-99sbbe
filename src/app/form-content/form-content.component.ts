import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MyModel } from '../my-model';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.css']
})
export class FormContentComponent implements OnInit,OnChanges {
  frmGroup: FormGroup;

  @Input()
  bindModel!: MyModel;


  

  constructor(frmBuilder: FormBuilder) { 
    this.frmGroup = frmBuilder.group({
      name: frmBuilder.control(''),
      password: frmBuilder.control('')
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['bindModel'].isFirstChange()) {
      const change=changes['bindModel'].currentValue;
      this.frmGroup.patchValue(change);
    }
  }

  ngOnInit(): void {

  }

  formSubmit() {
    console.log('etst');
  }
}
