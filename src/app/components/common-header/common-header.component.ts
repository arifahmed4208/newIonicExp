import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit {
  @Input() page?: string;
  @Input() showSearchBar: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToUserPage() {
    this.router.navigate(['tabs/home/user']);
  }
}
