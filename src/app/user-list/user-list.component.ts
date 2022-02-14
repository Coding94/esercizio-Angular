import { Component, OnInit, Input } from '@angular/core';
import { objPpl, Role, Gender } from '@app/interfaces/interfaceTwo';

@Component({
  selector: 'esercizio1-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input() ruolo: any = Role;

  arrayOfObj: objPpl[] = [
    {
      id: 3487,
      name: 'Mario',
      surname: 'Rossi',
      age: 25,
      dateOfBirth: '1995-14-12',
      address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100',
      },
      role: Role.STAFF,
      username: 'MarioRossi80',
      profilePhotoUrl: 'https://bit.ly/3yRngEP',
      gender: Gender.MALE,
    },
    {
      id: 12312,
      name: 'Maria',
      surname: 'Rossa',
      age: 26,
      dateOfBirth: '1994-10-11',
      address: {
        city: 'Palermo',
        street: 'Via Palermo 10',
        postalCode: '90100',
      },
      role: Role.MANAGER,
      username: 'MariaRossa94',
      profilePhotoUrl: 'https://bit.ly/3DWWxuj',
      gender: Gender.FEMALE,
    },
    {
      id: 45645,
      name: 'Elis',
      surname: 'Miao',
      age: 5,
      dateOfBirth: '2016-05-08',
      address: {
        city: 'Palermo',
        street: 'Via Palermo 120',
        postalCode: '90100',
      },
      role: Role.ADMIN,
      username: 'ElisMiao',
      profilePhotoUrl: 'https://bit.ly/3zU6iH3',
      gender: Gender.FEMALE,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  funzionePadre(event: any): void {
    console.log(event);
    this.arrayOfObj.splice(this.arrayOfObj.indexOf(event), 1);
  }

  getColor(ruolo: any) {
    switch (ruolo) {
      case 'ADMIN':
        return '2px solid red';
      case 'MANAGER':
        return '2px solid blue';
      case 'STAFF':
        return '2px solid yellow';
      default:
        return 'black';
    }
  }
}
