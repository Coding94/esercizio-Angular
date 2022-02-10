import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { objOne } from '@app/interfaces/interfaceOne';

@Component({
  selector: 'esercizio1-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  ObjOne: objOne = {
    id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 30,
    dateOfBirth: '14/12/1995',
    address: {
      city: 'Roma',
      street: 'Via roma 10',
      postalCode: '00100',
    },
    role: 'staff', // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    gender: 'male', // Generi possibili: 'male', 'female', 'other'
    companies: [
      {
        id: 148979,
        name: 'Develhope',
        description: 'La migliore',
        location: {
          city: 'Palermo',
          street: 'Via Libertà 58',
          postalCode: '90139',
        },
      },
      {
        id: 123123,
        name: 'Apple',
        description: 'E insomma...',
        location: {
          city: 'Cupertino',
          street: 'One Apple Park Way',
          postalCode: '95014',
        },
      },
    ],
  };

  arr1: any = [];
  img!: string;
  regex: RegExp = /(https)/;
  // regex: any = 'https';

  // request: string = 'https://bit.ly/3yRngEP';
  constructor() {}

  ngOnInit(param1: any = this.ObjOne): void {
    Object.entries(param1).forEach((elem: any) => {
      if (this.regex.test(elem[1])) {
        this.img = elem[1];
      } else {
        if (elem[0] == 'dateOfBirth') {
          // console.log((elem[1] = new Date('dd/mm/yyyy')));
          // console.log(elem[1].toLocaleDateString('en-US'));
          elem[1] = '14 Dec 1995';
        }
        if (
          typeof elem[1] === 'object' &&
          !Array.isArray(elem[1]) &&
          elem[1] !== null
        ) {
          this.arr1.push(`${elem[0]}`);
          Object.keys(elem[1]).forEach((elem3) => {
            let arrElem = [];
            arrElem.push(`${elem3}: ${elem[1][elem3]}`);
            this.arr1.push(`${arrElem}`);
          });
        } else {
          if (elem[0] == 'companies') {
            param1.companies.forEach((elem4: any) => {
              this.arr1.push(`Company: ${elem4.name}`);
              this.arr1.push(`Description: ${elem4.description}`);
            });
          } else {
            this.arr1.push(`${elem[0]}: ${elem[1]}`);
          }
        }
      }
    });
    // console.log(this.arr1);
    // console.log(Object.entries(param1));
  }
  // if (this.request === param1[elem])
}
