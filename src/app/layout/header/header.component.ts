import { Component, OnInit,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




  // using javascript 
   ngAfterViewInit(): void {
    const navbar = document.querySelector(".navbar") as HTMLElement;
    const searchBox = document.querySelector(".search-box .bx-search") as HTMLElement;
    const navLinks = document.querySelector(".nav-links") as HTMLElement;
    const menuOpenBtn = document.querySelector(".navbar .bx-menu") as HTMLElement;
    const menuCloseBtn = document.querySelector(".nav-links .bx-x") as HTMLElement;
    const htmlcssArrow = document.querySelector(".htmlcss-arrow") as HTMLElement;
    const moreArrow = document.querySelector(".more-arrow") as HTMLElement;
    const jsArrow = document.querySelector(".js-arrow") as HTMLElement;

    if (searchBox && navbar) {
      searchBox.addEventListener("click", () => {
        navbar.classList.toggle("showInput");
        if (navbar.classList.contains("showInput")) {
          searchBox.classList.replace("bx-search", "bx-x");
        } else {
          searchBox.classList.replace("bx-x", "bx-search");
        }
      });
    }

    if (menuOpenBtn && navLinks) {
      menuOpenBtn.onclick = () => {
        navLinks.style.left = "0";
      };
    }

    if (menuCloseBtn && navLinks) {
      menuCloseBtn.onclick = () => {
        navLinks.style.left = "-100%";
      };
    }

    if (htmlcssArrow && navLinks) {
      htmlcssArrow.onclick = () => {
        navLinks.classList.toggle("show1");
      };
    }

    if (moreArrow && navLinks) {
      moreArrow.onclick = () => {
        navLinks.classList.toggle("show2");
      };
    }

    if (jsArrow && navLinks) {
      jsArrow.onclick = () => {
        navLinks.classList.toggle("show3");
      };
    }
  }

}
