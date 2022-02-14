import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Role } from '@app/interfaces/interfaceTwo';

@Component({
  selector: 'esercizio1-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css'],
})
export class UserSingleComponent implements OnInit {
  @Input() singleObjOfArr: any;
  @Input() array: any;
  @Input() objInObj: any;
  @Output() nomeVariabile = new EventEmitter<number>();
  @Input() ruolo: any = Role;
  constructor() {}

  ngOnInit(): void {}
  removeUser(singleObjOfArr: any) {
    this.nomeVariabile.emit(singleObjOfArr);
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
