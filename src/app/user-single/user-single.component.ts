import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { objPpl } from '@app/interfaces/interfaceTwo';

@Component({
  selector: 'esercizio1-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css'],
})
export class UserSingleComponent implements OnInit {
  @Input() singleObjOfArr: any;
  @Input() array: any;
  @Input() objInObj: any;
  @Input() i: any;
  @Output() nomeVariabile = new EventEmitter<number>();
  @Output() user = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  removeUser(user: any) {
    this.user.emit(user);
  }
}
