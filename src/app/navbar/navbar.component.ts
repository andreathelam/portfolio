import { Component, OnInit, Input, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  open_menu() {
    var nav = document.getElementById("overlay").style.display="flex";
  }
  close_menu() {
    var nav = document.getElementById("overlay").style.display="none";
  }



  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object){ 

  }

  ngOnInit(): void {

    
  }

  

}
