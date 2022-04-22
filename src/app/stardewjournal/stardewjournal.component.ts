import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuDataService } from '../menu-data.service';

@Component({
  selector: 'app-stardewjournal',
  templateUrl: './stardewjournal.component.html',
  styleUrls: ['./stardewjournal.component.scss']
})
export class StardewjournalComponent implements OnInit, OnDestroy {

  n1:Array<string>;
  n2:Array<string>;
  n3:Array<string>;
  n4:Array<string>;
  subscription:Subscription;

  constructor(private data: MenuDataService) { }

  ngOnInit(): void {
    this.data.changeName(["Surviving2020", "#F0B8BF", "surviving2020"], ["grow", "#A3DDCB", "grow"], ["Puzzling Potions","#F5B971", "puzzling-potions"], ["Pollinate", "#A9C5A8", "pollinate"])
    this.subscription = this.data.currentN1.subscribe(n1 => this.n1 = n1)
    this.subscription = this.data.currentN2.subscribe(n2 => this.n2 = n2)
    this.subscription = this.data.currentN3.subscribe(n3 => this.n3 = n3)
    this.subscription = this.data.currentN4.subscribe(n4 => this.n3 = n4)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
