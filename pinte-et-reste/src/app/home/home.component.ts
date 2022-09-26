import {Component, Input, OnInit} from '@angular/core';
import images  from '../../assets/images/__credits.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  perPage: number = 50;
  @Input() file = images
  try: string = 'input marche';
  page: number = 1;
  array: string[][] = [];
  nbPages: number[] = [];
  arrayActual: string[][] = [];


  keys: string[] = Object.keys(this.file);

  constructor() { }
  ngOnInit(): void {
    for (let i = 10; i < this.keys.length + 10; i+=10) {
      this.array.push(this.keys.slice(i-10, i));
    }
  }
  test: string = 'one';
  nbImagesPerPage(event: any): void{
    this.perPage = event.target.value;
    this.nbPages = []
    for (let i = 0; i < 119 / this.perPage; i++){
      this.nbPages.push(i+1)
    }
  }
  pageActual(oui: number) {
    this.page = oui
    this.arrayActual = [];
    for (let i = ((this.page * this.perPage) - this.perPage) / 10; i < ((this.page * this.perPage) - this.perPage) / 10 + (this.perPage/10); i++ ) {
      this.arrayActual.push(this.array[i])
    }
  }


}
