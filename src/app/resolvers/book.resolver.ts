import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from '../book/models/book';
import { BookService } from '../book/service/book.service';

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<any> {

  constructor(private bookService: BookService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book[]> {
    return this.bookService.getBooks();
  }
}
