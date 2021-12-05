import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { IColumn } from 'src/app/column.interface';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  columns: IColumn[] = [
    {
      name: 'ایده ها',
      tasks: ['یادگیری زبان جدید', 'رفتن به کلاس زبان'],
    },
    {
      name: 'در حال تحقیق',
      tasks: ['بررسی تکنولوژی های جدید'],
    },
    {
      name: 'در حال انجام',
      tasks: ['درست کردن منو', 'ساختن فوتر', 'تکمیل سایت'],
    },
    {
      name: 'انجام شده ها',
      tasks: ['مسواک زدن', 'پیاده روی', 'چک کردن ایمیل', 'ورزش کردن'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
