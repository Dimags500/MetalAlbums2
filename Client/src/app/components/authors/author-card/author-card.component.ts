import { Component, Input, OnInit, Output  , EventEmitter } from '@angular/core';
import { IAuthor } from 'src/app/modals/author';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCardComponent implements OnInit {
  @Input() singleAuthor!: IAuthor;
  @Output() deleteAuthorEvent : EventEmitter<number> = new EventEmitter<number>();

  isAdmin = true;

  constructor() { }

  ngOnInit() {
  }

  deleteAuthor(id : number ){
    this.deleteAuthorEvent.emit(id);
  }

}
