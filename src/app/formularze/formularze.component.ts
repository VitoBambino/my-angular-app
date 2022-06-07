import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
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
    var form=JSON.stringify(value);
let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};
  
req.open("POST", "https://api.jsonbin.io/v3/b", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("X-Master-Key", "$2b$10$TycnQVgsRvh3d7uhhd4D/uJeEDuXlsW/nWsjQ34ZR3QJr9H4gFyp.");
req.setRequestHeader("X-Collection-Id", "629de210449a1f3821ff5d86");
req.setRequestHeader("X-Bin-Private", "false");
req.send(form);

}

}


