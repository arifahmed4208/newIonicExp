import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(private http: HttpService) {}

  books: any[] = [];

  ngOnInit(): void {
    // this.fetchBooks();
  }

  fetchBooks() {
    this.http.getBooks().subscribe((data) => {
      console.log(data);
      this.books = data;
    });
  }
}
