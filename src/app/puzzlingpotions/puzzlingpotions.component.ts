import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuDataService } from '../menu-data.service';

@Component({
  selector: 'app-puzzlingpotions',
  templateUrl: './puzzlingpotions.component.html',
  styleUrls: ['./puzzlingpotions.component.scss']
})
export class PuzzlingpotionsComponent implements OnInit {

  n1:Array<string>;
  n2:Array<string>;
  n3:Array<string>;
  n4:Array<string>;
  subscription:Subscription;

  constructor(private data: MenuDataService) { }

  ngOnInit(): void {
    this.data.changeName(["Pollinate", "#A9C5A8", "pollinate"], ["Warhawk", "#bde9f2", "warhawk-redesign"], ["Stardew Journal", "#CFB5D0", "stardew-journal"], ["Surviving2020", "#F0B8BF", "surviving2020"])
    this.subscription = this.data.currentN1.subscribe(n1 => this.n1 = n1)
    this.subscription = this.data.currentN2.subscribe(n2 => this.n2 = n2)
    this.subscription = this.data.currentN3.subscribe(n3 => this.n3 = n3)
    this.subscription = this.data.currentN4.subscribe(n4 => this.n4 = n4)

    enlargeImg();
    closeImg();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

function enlargeImg() {
}

function closeImg() {
}

