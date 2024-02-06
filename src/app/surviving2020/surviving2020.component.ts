import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuDataService } from '../menu-data.service';

@Component({
  selector: 'app-surviving2020',
  templateUrl: './surviving2020.component.html',
  styleUrls: ['./surviving2020.component.scss']
})
export class Surviving2020Component implements OnInit {

  n1:Array<string>;
  n2:Array<string>;
  n3:Array<string>;
  n4:Array<string>;
  subscription:Subscription;

  constructor(private data: MenuDataService) { }

  ngOnInit(): void {
    this.data.changeName(["New World", "#dddddd", "new-world"], ["Project Cupid", "#CFB5D0", "project-cupid"], ["Puzzling Potions","#F5B971", "puzzling-potions"], ["Stardew Journal", "#CFB5D0", "stardew-journal"])
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
