import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  href = this.router.url
  image: string = this.href.split('/')[this.href.split('/').length - 1]
  constructor(private router: Router) {}

  ngOnInit() {
  }

}
