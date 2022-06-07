import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
    req.setRequestHeader("X-Collection-Id", "629f372c449a1f3821006106");
    req.setRequestHeader("X-Bin-Private", "false");
    req.send(form);
    
  }

}
