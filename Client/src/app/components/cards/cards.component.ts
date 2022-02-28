import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/modals/album';
import { IAuthor } from 'src/app/modals/author';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() album! : IAlbum
  @Input() authorsArr! : IAuthor[]
  constructor() { }

  ngOnInit(): void {

    // console.log(this.album);
    // console.log(this.authorsArr);

  }

  getAuthorName(id: any){
    return this.authorsArr[id -1].name as string ;

  }

}
