import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit{
  title = "darkToggle";

  darkMode = false;
  ngOnInit(): void {
    // this.dectectColorScheme();
  }

  // dectectColorScheme(){
  //   if(window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches){
  //     this.darkMode = true;
  //     document.documentElement.setAttribute('data-theme',this.darkMode ? 'dark' : 'light');
  //   }
  // }

  // toogleTheme(){
  //   this.darkMode = !this.darkMode;
  //   document.documentElement.setAttribute('data-theme',this.darkMode ? 'dark' : 'light');
  // }

 }

