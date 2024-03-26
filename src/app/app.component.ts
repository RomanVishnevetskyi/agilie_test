import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommandService } from './services/command.service';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RootEdit } from './models/iImages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private commandService: CommandService,
              private fb: FormBuilder,
              private datePipe: DatePipe) {
  }
  @ViewChild('searchButton', { read: ElementRef }) searchButton!: ElementRef;
  form:FormGroup = this.fb.group({
    value: ["",]
  });
  images!: Observable<Array<RootEdit>>;

  ngOnInit() {
    this.images = this.commandService.getImages();
  }

  formatDate(date: string): string | null {
    const localDate = new Date(date);
    if (isNaN(localDate.getTime())) {
      return 'Invalid Date';
    }
    return this.datePipe.transform(date, 'mediumDate');
  }

  setSearch(value: any) {
    // Получаем  значение с инпута и можем прокинуть через сервис  для поиска по значению
  }
}
