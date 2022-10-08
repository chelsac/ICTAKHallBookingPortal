import { Text } from '@angular/compiler';
import { Component,  AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import{faEye,faTrash,faEdit}from'@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-bookinglisting',
  templateUrl: './bookinglisting.component.html',
  styleUrls: ['./bookinglisting.component.css'],
})
export class BookinglistingComponent implements AfterViewInit {
  faEye = faEye;
  faTrash = faTrash;
  faEdit = faEdit;
  displayedColumns: string[] = [
    'position',
    'name',
    'hallname',
    'date',
    'Time',
    'icon',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  Time: string;
  date:string;
  hallname: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'kartick',
    hallname: 'new meeting',
    date: '12-10-2022',
    Time: '6.00pm-8.00pm',
    icon: '',
  },
  {
    position: 2,
    name: 'kartick',
    hallname: 'new meeting',
    date: '12-10-2022',
    Time: '6.00pm-8.00pm',
    icon: '',
  },
  {
    position: 3,
    name: 'kartick',
    hallname: 'new meeting',
    date: '12-10-2022',
    Time: '6.00pm-8.00pm',
    icon: '',
  },
  {
    position: 4,
    name: 'kartick',
    hallname: 'new meeting',
    date: '12-10-2022',
    Time: '6.00pm-8.00pm',
    icon: '',
  },
  {
    position: 5,
    name: 'kartick',
    hallname: 'new meeting',
    date: '12-10-2022',
    Time: '6.00pm-8.00pm',
    icon: '',
  },
];
//   constructor() { }

//   ngOnInit(): void {
//   }

// }
