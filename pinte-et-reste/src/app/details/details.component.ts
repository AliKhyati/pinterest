import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import images  from '../../assets/images/__credits.json';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  href = this.router.url
  image: string = this.href.split('/')[this.href.split('/').length - 1]
  favorite: boolean = false;
  file: any = images
  constructor(private router: Router) {
      if (localStorage.getItem(this.image) != null){
        this.favorite = true;
      }
  }

  ngOnInit() {
    console.log(typeof this.image)
  }
  addFavorite() {
    localStorage.setItem(this.image, this.image)
    this.favorite = true
  }

  removeFavorite(item: string) {
    localStorage.removeItem(item)
    this.favorite = false;
  }
}
