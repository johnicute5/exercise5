import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {
  @Output() addEmitter = new EventEmitter();
  @Output() deleteAllEmitter = new EventEmitter();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  add(){
    this.addEmitter.emit(this.route.snapshot.params)
    if (this.router.url.includes('book')) {
      this.router.navigate(['form/books'])
    } else if (this.router.url.includes('blog')) {
      this.router.navigate(['form/blogs'])
    }
  }
  deleteAll(){
    this.deleteAllEmitter.emit(this.route.snapshot.params)
    alert("Do you want to delte all?")
    console.log(this.route.snapshot.params)
  }
}
