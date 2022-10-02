import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sendEdit(){
    alert(`do you want to edit: ${this.myArrayOfBooks?.id}?`);
    this.router.navigate([`book/addform/${this.myArrayOfBooks?.id}`])
    this.editBookEmitter.emit(this.myArrayOfBooks?.id);
    console.log("Edit Book: " + this.myArrayOfBooks?.id)

  }

  sendDelete(){
    console.log("Delete Book: " + this.myArrayOfBooks?.id)
    this.deleteBookEmitter.emit(this.myArrayOfBooks?.id)
    this.router.navigate(['book'])
  }

}
