import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'formularze',
  templateUrl: './formularze.component.html',
  styleUrls: ['./formularze.component.css']
})
export class FormularzeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: any){
    console.log(value);
  }

}

