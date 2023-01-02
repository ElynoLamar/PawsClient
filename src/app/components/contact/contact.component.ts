import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  firstName: string = ""
  lastName: string = ""
  email: string = ""
  phone: string = ""
  message: string = ""
  ngOnInit(): void {
  }

}
