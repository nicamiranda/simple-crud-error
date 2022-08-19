import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private route : ActivatedRoute) {
    this.books = route.snapshot.data['books']
  }

  ngOnInit(): void {
  }

  executeEdit(book:Book) {
    console.log(book.id);
  }

  executeDelete(book:Book) {
    console.log(book.id);
  }

}
