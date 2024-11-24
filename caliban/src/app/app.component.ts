import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, FooterComponent], //add [FooterComponent, MenuComponent]
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'caliban';
}

/*@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  // Certifique-se de que o HeaderComponent está aqui
    FooterComponent   // Certifique-se de que o FooterComponent está aqui
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})*/