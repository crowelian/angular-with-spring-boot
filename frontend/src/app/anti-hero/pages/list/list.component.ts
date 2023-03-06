import { Component, OnInit } from '@angular/core';
import { AntiHero } from '../../models/anti-hero.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  // sample data of anti hero
  antiHeroes: AntiHero[] = [
    {
      firstName: 'Eddie',
      lastName: 'Brock',
      house: 'New York',
      knownAs: 'Venom',
    },
    {
      firstName: 'Eddie 2',
      lastName: 'Brock 2',
      house: 'New York 2',
      knownAs: 'Venom 2',
    },
  ];
  headers: { headerName: string; fieldName: keyof AntiHero }[] = [
    { headerName: 'First Name', fieldName: 'firstName' },
    { headerName: 'Last Name', fieldName: 'lastName' },
    { headerName: 'House', fieldName: 'house' },
    { headerName: 'Known As', fieldName: 'knownAs' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
