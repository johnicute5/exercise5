import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from 'src/app/blog/models/blog';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {
  @Input() blogs:Blog | undefined;
  @Output() addEmitter = new EventEmitter();
  @Output() deleteAllEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.addEmitter.emit(this.blogs)

  }
  deleteAll(){
    this.deleteAllEmitter.emit(this.blogs)
  }
}
