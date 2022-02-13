import { Component, OnInit, Input } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}
}
