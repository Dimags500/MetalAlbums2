import { Component, Input, OnInit, Output  , EventEmitter } from '@angular/core';
import { IAuthor } from 'src/app/modals/author';
import { AccountService } from 'src/app/servises/account.service';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCardComponent implements OnInit {
  @Input() singleAuthor!: IAuthor;
  @Output() deleteAuthorEvent : EventEmitter<number> = new EventEmitter<number>();

  isAdmin = true;

  constructor(public account: AccountService) { }

  ngOnInit() {
  }

  deleteAuthor(id : number ){
    this.deleteAuthorEvent.emit(id);
  }

}
