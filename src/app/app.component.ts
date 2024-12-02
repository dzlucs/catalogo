import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
//import { DrinkOrderComponent } from "./drink-order/drink-order.component";

//teste
//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { AppComponent } from './app.component.spec';
//import { DrinkOrderComponent } from './drink-order/drink-order.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, FooterComponent, /*DrinkOrderComponent*/], //add [FooterComponent, MenuComponent]
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'caliban';
}

//descomentei aqui
/*@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  // Certifique-se de que o HeaderComponent está aqui
    FooterComponent,   // Certifique-se de que o FooterComponent está aqui
    MainComponent,
    //DrinkOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]*/
//export class AppModule { }
