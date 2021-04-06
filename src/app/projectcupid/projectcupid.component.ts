import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuDataService } from '../menu-data.service';

@Component({
  selector: 'app-projectcupid',
  templateUrl: './projectcupid.component.html',
  styleUrls: ['./projectcupid.component.scss']
})
export class ProjectcupidComponent implements OnInit {

  n1:Array<string>;
  n2:Array<string>;
  n3:Array<string>;
  subscription:Subscription;
  
  constructor(private data: MenuDataService) { }

  ngOnInit(): void {
    this.data.changeName(["Stardew Journal", "#F5B971", "stardew-journal"], ["grow", "#A3DDCB", "grow"], ["Surviving2020", "#F0B8BF", "surviving2020"])
    this.subscription = this.data.currentN1.subscribe(n1 => this.n1 = n1)
    this.subscription = this.data.currentN2.subscribe(n2 => this.n2 = n2)
    this.subscription = this.data.currentN3.subscribe(n3 => this.n3 = n3)
  }

}
