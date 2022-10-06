import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  favorites: string[] = Object.keys(localStorage)
  constructor() { }

  ngOnInit(): void {
  }

  removeFavorite(item: string) {
    localStorage.removeItem(item)
    location.reload()
  }
}
