import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() myArrayOfBooks:Book | undefined;
  @Output() editBookEmitter = new EventEmitter();
  @Output() deleteBookEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendEdit(){
    this.editBookEmitter.emit(this.myArrayOfBooks?.id);
  }

  sendDelete(){
    this.deleteBookEmitter.emit(this.myArrayOfBooks?.id);
  }

}
