import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us-section',
  templateUrl: './contact-us-section.component.html',
  styleUrls: ['./contact-us-section.component.css']
})
export class ContactUsSectionComponent implements OnInit {


  mailOne: string = 'sales@stcoverseas.co.in';
  mailTwo: string = 'info@stcoverseas.co.in';

  constructor() { }

  ngOnInit(): void {
  }

}
