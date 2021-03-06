import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventsDataService } from '../shared/events-data.service';
import { Events } from '../shared/events.model';

@Component({
  selector: 'app-home-input',
  templateUrl: './home-input.component.html',
  styleUrls: ['./home-input.component.css']
})
export class HomeInputComponent implements OnInit {
  event: Events;
  constructor(private eventsDataService: EventsDataService) { }

  ngOnInit() {
  }

  onAddEvent(form: NgForm) {
    const value = form.value;
    if (value.content) {
      const d = new Date();
      this.eventsDataService.addEvent(value.title, value.content, d + '')
        .subscribe(
          () => {
              this.event = {_id: '', title: form.value.title, content: form.value.content, date: d + '', favorite: false};
              form.reset();
          }
        );
    }
  }
}

