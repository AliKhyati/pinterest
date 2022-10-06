import {Component, Input, OnInit} from '@angular/core';
import images  from '../../assets/images/__credits.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  perPage: number = 119;
  file = images
  page: number = 1;
  array: string[][] = [];
  nbPages: number[] = [];
  arrayActual: string[] = [];
  keys: string[] = Object.keys(this.file);
  sortedArr: string[] = [...this.keys].sort();
  reversedArr: string[] = [...this.keys].sort().reverse();

  constructor() { }
  ngOnInit(): void {
    this.pageActual(1);
    console.log(this.keys, this.sortedArr, this.reversedArr)
    }

  nbImagesPerPage(event: Event): void{
    this.perPage = parseInt((event.target as HTMLInputElement).value);
    this.nbPages = []
    for (let i = 0; i < (119 / this.perPage); i++){
      this.nbPages.push(i+1)
    }
    this.pageActual(1)
  }
  removeFavorite(item: string) {
    localStorage.removeItem(item)
  }
  addFavorite(item: string) {
    localStorage.setItem(item, item)
  }
  pageActual(page: number) {
    this.page = page;
    this.arrayActual = [];
    let start: number = this.page * this.perPage - this.perPage;
    this.arrayActual = this.keys.slice(start, start + this.perPage)
  }



  goNextPage() {
    this.page++
    this.pageActual(this.page)
  }
  goPreviousPage() {
    this.page--
    this.pageActual(this.page)
  }
  sortImages() {
    this.keys = this.sortedArr
    console.log('sorted')


    this.pageActual(1)
  }
  reverseSortImages() {
    this.keys = this.reversedArr;
    console.log('reverse')
    this.pageActual(1)

  }
}
