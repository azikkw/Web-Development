import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = '"Quantum dots from Sber - OLED TV 65" for 55K with an assistant and installation .apk. That good?'
  chanel = "Wylsacom"

  private static menuCondition = localStorage.getItem("menu")

  public getMenuCondition() {
    return HomeComponent.menuCondition
  }
  public static setMenuCondition(condition: string) {
    this.menuCondition = condition
  }

  chooseNav(e: any) {
    for(let element of e.composedPath()[1].querySelectorAll("p")) {
      element.classList.remove("active")
    } e.composedPath()[0].classList.add("active")
  }

  openMoreWindow(e: any) {
    e.composedPath()[1].children[1].classList.toggle("open")
  }

  openShareWindow(e: any) {
    if(e.composedPath()[0].children[1].innerHTML == "Share") {
      e.composedPath()[6].querySelector(".share_window").classList.add("open")
      document.body.classList.add("lock")
      e.composedPath()[1].classList.remove("open")
    }
  }

  closeShareWindow(e: any) {
    e.composedPath()[3].classList.remove("open")
    document.body.classList.remove("lock")
  }

}
